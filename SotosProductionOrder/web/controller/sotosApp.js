var app = angular.module('sotosApp', []);
app.controller("sotosController", function($scope, $compile) {
    $scope.requestPage = function(page, activeTab, model) {
        $("#content-page").load("view/" + page + ".html", function() {
            if (model) {
                $scope.model = model;
            } else {
                $scope.model = {};
            }
            $scope.$parent.activetab = activeTab;
            $compile($("#content-page"))($scope);
        });
    };
}).directive('convertToNumber', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            ngModel.$parsers.push(function(val) {
                return parseInt(val, 10);
            });
            ngModel.$formatters.push(function(val) {
                return '' + val;
            });
        }
    };
});

app.controller("drCorController", function($scope, $http) {
    $scope.drCorLst = [];
    $scope.sortType = "cor_descricao";
    $scope.sortReverse = false;
    $scope.search = "";
    $scope.drCor = $scope.$parent.model;
    $scope.http = $http;

    $scope.loadDrCorLst = function() {
        $http.get("ws/DrCorController/findAll", {method: "GET"}).then(function(response) {
            $scope.drCorLst = response.data;
        });
    };

    $scope.delete = function(drCor) {
        bootbox.confirm("Deseja realmente excluir o registro?", function(ok) {
            if (ok) {
                $http({
                    method: "GET",
                    url: "ws/DrCorController/delete",
                    params: {
                        json: drCor
                    }
                }).then(function(response) {
                    bootbox.alert("Registro excluído com Sucesso!", function() {
                        $scope.loadDrCorLst();
                    });
                });
            }
        });
    };

    $scope.save = function(drCor) {
        if (drCor.cor_codigo === undefined) {
            $scope.insert(drCor);
        } else {
            $scope.update(drCor);
        }
    };

    $scope.insert = function(drCor) {
        $http({
            method: "GET",
            url: "ws/DrCorController/insert",
            params: {
                json: drCor
            }
        }).then(function(response) {
            bootbox.alert("Registro inserido com Sucesso!", function() {
                $scope.requestPage('lst/drCorLst');
            });
        });
    };

    $scope.update = function(drCor) {
        $http({
            method: "GET",
            url: "ws/DrCorController/update",
            params: {
                json: drCor
            }
        }).then(function(response) {
            bootbox.alert("Registro alterado com Sucesso!", function() {
                $scope.requestPage('lst/drCorLst');
            });
        });
    };

    $scope.loadDrCorLst();
});

app.controller("drTamanhoController", function($scope, $http) {
    $scope.drTamanhoLst = [];
    $scope.sortType = "tam_ordem";
    $scope.sortReverse = false;
    $scope.search = "";
    $scope.drTamanho = $scope.$parent.model;
    $scope.http = $http;

    $scope.loadDrTamanhoLst = function() {
        $http.get("ws/DrTamanhoController/findAll", {method: "GET"}).then(function(response) {
            $scope.drTamanhoLst = response.data;
        });
    };

    $scope.delete = function(drTamanho) {
        bootbox.confirm("Deseja realmente excluir o registro?", function(ok) {
            if (ok) {
                $http({
                    method: "GET",
                    url: "ws/DrTamanhoController/delete",
                    params: {
                        json: drTamanho
                    }
                }).then(function(response) {
                    bootbox.alert("Registro excluído com Sucesso!", function() {
                        $scope.loadDrTamanhoLst();
                    });
                });
            }
        });
    };

    $scope.save = function(drTamanho) {
        if (drTamanho.tam_codigo === undefined) {
            $scope.insert(drTamanho);
        } else {
            $scope.update(drTamanho);
        }
    };

    $scope.insert = function(drTamanho) {
        $http({
            method: "GET",
            url: "ws/DrTamanhoController/insert",
            params: {
                json: drTamanho
            }
        }).then(function(response) {
            bootbox.alert("Registro inserido com Sucesso!", function() {
                $scope.requestPage('lst/drTamanhoLst');
            });
        });
    };

    $scope.update = function(drTamanho) {
        $http({
            method: "GET",
            url: "ws/DrTamanhoController/update",
            params: {
                json: drTamanho
            }
        }).then(function(response) {
            bootbox.alert("Registro alterado com Sucesso!", function() {
                $scope.requestPage('lst/drTamanhoLst');
            });
        });
    };

    $scope.loadDrTamanhoLst();
});

app.controller("drColecaoController", function($scope, $http) {
    $scope.drColecaoLst = [];
    $scope.sortType = "col_descricao";
    $scope.sortReverse = false;
    $scope.search = "";
    $scope.drColecao = $scope.$parent.model;
    $scope.http = $http;

    $scope.loadDrColecaoLst = function() {
        $http.get("ws/DrColecaoController/findAll", {method: "GET"}).then(function(response) {
            $scope.drColecaoLst = response.data;
        });
    };

    $scope.delete = function(drColecao) {
        bootbox.confirm("Deseja realmente excluir o registro?", function(ok) {
            if (ok) {
                $http({
                    method: "GET",
                    url: "ws/DrColecaoController/delete",
                    params: {
                        json: drColecao
                    }
                }).then(function(response) {
                    bootbox.alert("Registro excluído com Sucesso!", function() {
                        $scope.loadDrColecaoLst();
                    });
                });
            }
        });
    };

    $scope.save = function(drColecao) {
        if (drColecao.col_codigo === undefined) {
            $scope.insert(drColecao);
        } else {
            $scope.update(drColecao);
        }
    };

    $scope.insert = function(drColecao) {
        $http({
            method: "GET",
            url: "ws/DrColecaoController/insert",
            params: {
                json: drColecao
            }
        }).then(function(response) {
            bootbox.alert("Registro inserido com Sucesso!", function() {
                $scope.requestPage('lst/drColecaoLst');
            });
        });
    };

    $scope.update = function(drColecao) {
        $http({
            method: "GET",
            url: "ws/DrColecaoController/update",
            params: {
                json: drColecao
            }
        }).then(function(response) {
            bootbox.alert("Registro alterado com Sucesso!", function() {
                $scope.requestPage('lst/drColecaoLst');
            });
        });
    };

    $scope.loadDrColecaoLst();
});

app.controller("drSetorController", function($scope, $http) {
    $scope.drSetorLst = [];
    $scope.sortType = "set_descricao";
    $scope.sortReverse = false;
    $scope.search = "";
    $scope.drSetor = $scope.$parent.model;
    $scope.http = $http;

    $scope.loadDrSetorLst = function() {
        $http.get("ws/DrSetorController/findAll", {method: "GET"}).then(function(response) {
            $scope.drSetorLst = response.data;
        });
    };

    $scope.delete = function(drSetor) {
        bootbox.confirm("Deseja realmente excluir o registro?", function(ok) {
            if (ok) {
                $http({
                    method: "GET",
                    url: "ws/DrSetorController/delete",
                    params: {
                        json: drSetor
                    }
                }).then(function(response) {
                    bootbox.alert("Registro excluído com Sucesso!", function() {
                        $scope.loadDrSetorLst();
                    });
                });
            }
        });
    };

    $scope.save = function(drSetor) {
        if (drSetor.set_codigo === undefined) {
            $scope.insert(drSetor);
        } else {
            $scope.update(drSetor);
        }
    };

    $scope.insert = function(drSetor) {
        $http({
            method: "GET",
            url: "ws/DrSetorController/insert",
            params: {
                json: drSetor
            }
        }).then(function(response) {
            bootbox.alert("Registro inserido com Sucesso!", function() {
                $scope.requestPage('lst/drSetorLst');
            });
        });
    };

    $scope.update = function(drSetor) {
        $http({
            method: "GET",
            url: "ws/DrSetorController/update",
            params: {
                json: drSetor
            }
        }).then(function(response) {
            bootbox.alert("Registro alterado com Sucesso!", function() {
                $scope.requestPage('lst/drSetorLst');
            });
        });
    };

    $scope.loadDrSetorLst();
});


app.controller("drProdutoController", function($scope, $http) {
    $scope.drProdutoLst = [];
    $scope.drColecaoLst = [];
    $scope.sortType = "pro_codigo";
    $scope.sortReverse = false;
    $scope.search = "";
    $scope.drProduto = $scope.$parent.model;
    $scope.http = $http;

    $scope.loadDrProdutoLst = function() {
        $http.get("ws/DrProdutoController/findAll", {method: "GET"}).then(function(response) {
            $scope.drProdutoLst = response.data;
        });
    };

    $scope.loadDrColecaoLst = function() {
        $http.get("ws/DrColecaoController/findAll", {method: "GET"}).then(function(response) {
            $scope.drColecaoLst = response.data;
        });
    };

    $scope.createChildrens = function() {
        bootbox.confirm("Deseja realmente iniciar o processo para gerar todos os produtos finais?", function(ok) {
            if (ok) {
                $http.get("ws/DrProdutoController/createChildrens", {method: "GET"}).then(function(response) {
                    bootbox.alert("Registros inseridos com Sucesso!", function() {
                        $scope.requestPage('lst/drProdutoFinalLst');
                    });
                });
            }
        });
    }

    $scope.delete = function(drProduto) {
        bootbox.confirm("Deseja realmente excluir o registro?", function(ok) {
            if (ok) {
                $http({
                    method: "GET",
                    url: "ws/DrProdutoController/delete",
                    params: {
                        json: drProduto
                    }
                }).then(function(response) {
                    bootbox.alert("Registro excluído com Sucesso!", function() {
                        $scope.loadDrProdutoLst();
                    });
                });
            }
        });
    };

    $scope.save = function(drProduto) {
        if (drProduto.pro_codigo === undefined) {
            $scope.insert(drProduto);
        } else {
            $scope.update(drProduto);
        }
    };

    $scope.insert = function(drProduto) {
        $http({
            method: "GET",
            url: "ws/DrProdutoController/insert",
            params: {
                json: drProduto
            }
        }).then(function(response) {
            bootbox.alert("Registro inserido com Sucesso!", function() {
                $scope.requestPage('lst/drProdutoLst');
            });
        });
    };

    $scope.update = function(drProduto) {
        $http({
            method: "GET",
            url: "ws/DrProdutoController/update",
            params: {
                json: drProduto
            }
        }).then(function(response) {
            bootbox.alert("Registro alterado com Sucesso!", function() {
                $scope.requestPage('lst/drProdutoLst');
            });
        });
    };

    $scope.loadDrProdutoLst();
    $scope.loadDrColecaoLst();
});

app.controller("drProdutoCoresController", function($scope, $http) {
    $scope.drProdutoCoresLst = [];
    $scope.drCorLst = [];
    $scope.sortType = "cor_descricao";
    $scope.sortReverse = false;
    $scope.search = "";
    $scope.drProduto = $scope.$parent.model;
    $scope.http = $http;

    $scope.loadDrProdutoCoresLst = function() {
        $http.get("ws/DrProdutoCoresController/findByProCodigo", {method: "GET", params: {pro_codigo: $scope.drProduto.pro_codigo}}).then(function(response) {
            $scope.drProdutoCoresLst = response.data;
        });
    };

    $scope.loadDrCorLst = function() {
        $http.get("ws/DrCorController/findAll", {method: "GET"}).then(function(response) {
            $scope.drCorLst = response.data;
        });
    };

    $scope.resetForm = function() {
        $scope.drProdutoCores = {};
    };

    $scope.delete = function(drProdutoCores) {
        bootbox.confirm("Deseja realmente excluir o registro?", function(ok) {
            if (ok) {
                $http({
                    method: "GET",
                    url: "ws/DrProdutoCoresController/delete",
                    params: {
                        json: drProdutoCores
                    }
                }).then(function(response) {
                    bootbox.alert("Registro excluído com Sucesso!", function() {
                        $scope.loadDrProdutoCoresLst();
                    });
                });
            }
        });
    };

    $scope.save = function(drProdutoCores) {
        $scope.insert(drProdutoCores);
    };

    $scope.insert = function(drProdutoCores) {
        drProdutoCores.drProduto = $scope.drProduto;
        $http({
            method: "GET",
            url: "ws/DrProdutoCoresController/insert",
            params: {
                json: drProdutoCores
            }
        }).then(function(response) {
            bootbox.alert("Registro inserido com Sucesso!", function() {
                $scope.resetForm();
                $scope.loadDrProdutoCoresLst();
            });
        });
    };

    $scope.loadDrProdutoCoresLst();
    $scope.loadDrCorLst();
});

app.controller("drEtapasProdutoController", function($scope, $http) {
    $scope.drEtapasProdutoLst = [];
    $scope.drSetorLst = [];
    $scope.sortType = "cor_descricao";
    $scope.sortReverse = false;
    $scope.search = "";
    $scope.drProduto = $scope.$parent.model;
    $scope.http = $http;

    $scope.loadDrEtapasProdutoLst = function() {
        $http.get("ws/DrEtapasProdutoController/findByProCodigo", {method: "GET", params: {pro_codigo: $scope.drProduto.pro_codigo}}).then(function(response) {
            $scope.drEtapasProdutoLst = response.data;
        });
    };

    $scope.loadDrSetorLst = function() {
        $http.get("ws/DrSetorController/findAll", {method: "GET"}).then(function(response) {
            $scope.drSetorLst = response.data;
        });
    };

    $scope.resetForm = function() {
        $scope.drEtapasProduto = {};
    };

    $scope.delete = function(drEtapasProduto) {
        bootbox.confirm("Deseja realmente excluir o registro?", function(ok) {
            if (ok) {
                $http({
                    method: "GET",
                    url: "ws/DrEtapasProdutoController/delete",
                    params: {
                        json: drEtapasProduto
                    }
                }).then(function(response) {
                    bootbox.alert("Registro excluído com Sucesso!", function() {
                        $scope.loadDrEtapasProdutoLst();
                    });
                });
            }
        });
    };

    $scope.save = function(drEtapasProduto) {
        $scope.insert(drEtapasProduto);
    };

    $scope.insert = function(drEtapasProduto) {
        drEtapasProduto.drProduto = $scope.drProduto;
        $http({
            method: "GET",
            url: "ws/DrEtapasProdutoController/insert",
            params: {
                json: drEtapasProduto
            }
        }).then(function(response) {
            bootbox.alert("Registro inserido com Sucesso!", function() {
                $scope.resetForm();
                $scope.loadDrEtapasProdutoLst();
            });
        });
    };

    $scope.loadDrEtapasProdutoLst();
    $scope.loadDrSetorLst();
});


app.controller("drProdutoTamanhosController", function($scope, $http) {
    $scope.drProdutoTamanhosLst = [];
    $scope.drTamanhoLst = [];
    $scope.sortType = "tam_sigla";
    $scope.sortReverse = false;
    $scope.search = "";
    $scope.drProduto = $scope.$parent.model;
    $scope.http = $http;

    $scope.loadDrProdutoTamanhoLst = function() {
        $http.get("ws/DrProdutoTamanhoController/findByProCodigo", {method: "GET", params: {pro_codigo: $scope.drProduto.pro_codigo}}).then(function(response) {
            $scope.drProdutoTamanhosLst = response.data;
        });
    };

    $scope.loadDrTamanhoLst = function() {
        $http.get("ws/DrTamanhoController/findAll", {method: "GET"}).then(function(response) {
            $scope.drTamanhoLst = response.data;
        });
    };

    $scope.resetForm = function() {
        $scope.drProdutoTamanhos = {};
    };

    $scope.delete = function(drProdutoTamanhos) {
        bootbox.confirm("Deseja realmente excluir o registro?", function(ok) {
            if (ok) {
                $http({
                    method: "GET",
                    url: "ws/DrProdutoTamanhoController/delete",
                    params: {
                        json: drProdutoTamanhos
                    }
                }).then(function(response) {
                    bootbox.alert("Registro excluído com Sucesso!", function() {
                        $scope.loadDrProdutoTamanhoLst();
                    });
                });
            }
        });
    };

    $scope.save = function(drProdutoTamanhos) {
        $scope.insert(drProdutoTamanhos);
    };

    $scope.insert = function(drProdutoTamanhos) {
        drProdutoTamanhos.drProduto = $scope.drProduto;
        $http({
            method: "GET",
            url: "ws/DrProdutoTamanhoController/insert",
            params: {
                json: drProdutoTamanhos
            }
        }).then(function(response) {
            bootbox.alert("Registro inserido com Sucesso!", function() {
                $scope.resetForm();
                $scope.loadDrProdutoTamanhoLst();
            });
        });
    };

    $scope.loadDrProdutoTamanhoLst();
    $scope.loadDrTamanhoLst();
});

app.controller("drPessoasController", function($scope, $http) {
    $scope.drPessoasLst = [];
    $scope.drSetorLst = [];
    $scope.sortType = "pes_nome";
    $scope.sortReverse = false;
    $scope.search = "";
    $scope.drPessoas = $scope.$parent.model;
    $scope.http = $http;

    if (!$scope.drPessoas.pes_codigo) {
        $scope.drPessoas.pes_nivelacesso = "3";
    }

    $scope.loadDrPessoasLst = function() {
        $http.get("ws/DrPessoasController/findAll", {method: "GET"}).then(function(response) {
            $scope.drPessoasLst = response.data;
        });
    };

    $scope.loadDrSetorLst = function() {
        $http.get("ws/DrSetorController/findAll", {method: "GET"}).then(function(response) {
            $scope.drSetorLst = response.data;
            if (!$scope.drPessoas.pes_codigo)
                $scope.drPessoas.drSetor = $scope.drSetorLst[0];
        });
    };

    $scope.delete = function(drPessoas) {
        bootbox.confirm("Deseja realmente excluir o registro?", function(ok) {
            if (ok) {
                $http({
                    method: "GET",
                    url: "ws/DrPessoasController/delete",
                    params: {
                        json: drPessoas
                    }
                }).then(function(response) {
                    bootbox.alert("Registro excluído com Sucesso!", function() {
                        $scope.loadDrPessoasLst();
                    });
                });
            }
        });
    };

    $scope.save = function(drPessoas) {
        if (drPessoas.pes_codigo === undefined) {
            $scope.insert(drPessoas);
        } else {
            $scope.update(drPessoas);
        }
    };

    $scope.insert = function(drPessoas) {
        $http({
            method: "GET",
            url: "ws/DrPessoasController/insert",
            params: {
                json: drPessoas
            }
        }).then(function(response) {
            bootbox.alert("Registro inserido com Sucesso!", function() {
                $scope.requestPage('lst/drPessoasLst');
            });
        });
    };

    $scope.update = function(drPessoas) {
        $http({
            method: "GET",
            url: "ws/DrPessoasController/update",
            params: {
                json: drPessoas
            }
        }).then(function(response) {
            bootbox.alert("Registro alterado com Sucesso!", function() {
                $scope.requestPage('lst/drPessoasLst');
            });
        });
    };

    $scope.loadDrPessoasLst();
    $scope.loadDrSetorLst();
});