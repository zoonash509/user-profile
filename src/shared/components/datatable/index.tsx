
import Table, { TableProps } from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import Paper from '@mui/material/Paper'
import clsx from 'clsx'
import { Theme, styled } from '@mui/material/styles'
import { ReactNode } from 'react'

export declare type IDataTable = Partial<TableProps> & {
  theme: Theme
  variant?: 'basic' | null
  theadChildren?: ReactNode
  tbodyChildren?: ReactNode
}

const CustomTable = styled(
  'div',
  {}
)<Partial<IDataTable>>(({ theme }) => ({
  '&.u-table-wrap': {
    boxSizing: 'border-box',
    '*': {
      boxSizing: 'border-box'
    },
    '.u-table-container': {
      boxShadow:
        '0px 0px 0px 0px transparent, 0px 0px 0px 0px transparent, 0px 0px 0px 0px transparent',
      border: '1px solid',
      borderRadius: 8,
      borderColor: theme.palette.divider,
      overflow: 'auto',
      maxHeight: 'calc(100vh - 220px)',
      [theme.breakpoints.up('xl')]: { maxHeight: 'calc(100vh - 200px)' },
      scrollbarWidth: 'thin',
      '&::-webkit-scrollbar': {
        width: 7,
        height: 7
      },
      '&::-webkit-scrollbar-track': {
        padding: '0 1px',
        backgroundColor: '#f0f0f0'
      },
      '&::-webkit-scrollbar-thumb': {
        transition: 'all 0.3s',
        backgroundColor: '#cdcdcd'
      },
      '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#a6a6a6'
      }
    },
    '.u-table': {
      borderCollapse: 'inherit',
      tableLayout: 'auto',
      width: '100%',
      '.u-table-head': {
        position: 'sticky',
        top: 0,
        zIndex: 1200,
        th: {
          fontWeight: 600,
          color: theme.palette.grey[900],
          lineHeight: theme.typography.subtitle2.lineHeight,
          padding: '12px 15px 12px 15px',
          borderColor: theme.palette.divider,
          backgroundColor: theme.palette.common.white,
          minWidth: 200,
          maxWidth: 200,
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          '&.checkbox-cell': {
            padding: '12px !important',
            width: 24,
            minWidth: 24,
            maxWidth: '100%',
            '&.fixed-cell': {
              left: 0
            }
          },
          '&.action-cell': {
            padding: '4px !important',
            width: 24,
            minWidth: 24,
            maxWidth: '100%',
            '&.fixed-cell': {
              right: 0
            }
          },
          '&.img-cell': {
            width: 80,
            padding: '4px !important',
            textAlign: 'center',
            lineHeight: 0,
            minWidth: 80,
            maxWidth: '100%'
          },
          // "&.indent-cell": {
          //   width: "30%",
          //   minWidth:"30%",
          //   maxWidth: "30%",
          // },
          '&.user-img-cell': {
            width: 48,
            minWidth: 48,
            maxWidth: '100%',
            textAlign: 'center',
            padding: 4,
            lineHeight: '12px',
            svg: {
              width: 20,
              height: 20,
              path: {
                fill: theme.palette.grey[300]
              }
            }
          },
          '&.toggle-cell': {
            width: 48,
            minWidth: 48,
            maxWidth: '100%',
            textAlign: 'center',
            padding: 4
          }
        },
        td: {
          fontWeight: 600,
          color: theme.palette.grey[900],
          lineHeight: theme.typography.subtitle2.lineHeight,
          padding: '12px 15px 12px 15px',
          borderColor: theme.palette.divider,
          backgroundColor: theme.palette.common.white,
          minWidth: 200,
          maxWidth: 200,
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          '&.checkbox-cell': {
            padding: '12px !important',
            width: 24,
            minWidth: 24,
            maxWidth: '100%',
            '&.fixed-cell': {
              left: 0
            }
          },
          '&.action-cell': {
            padding: '4px !important',
            width: 24,
            minWidth: 24,
            maxWidth: '100%',
            '&.fixed-cell': {
              right: 0
            }
          },
          '&.img-cell': {
            width: 80,
            padding: '4px !important',
            textAlign: 'center',
            lineHeight: 0,
            minWidth: 80,
            maxWidth: '100%'
          },
          '&.indent-cell': {
            width: '30%',
            minWidth: '30%',
            maxWidth: '30%'
          },
          '&.user-img-cell': {
            width: 48,
            minWidth: 48,
            maxWidth: '100%',
            textAlign: 'center',
            padding: 4,
            lineHeight: '12px',
            svg: {
              width: 20,
              height: 20,
              path: {
                fill: theme.palette.grey[300]
              }
            }
          },
          '&.toggle-cell': {
            width: 48,
            minWidth: 48,
            maxWidth: '100%',
            textAlign: 'center',
            padding: 4
          }
        },
        '.filters-row': {
          th: {
            padding: '4px 15px 4px 15px'
          },
          td: {
            padding: '4px 15px 4px 15px'
          },
          '.table-filter': {
            display: 'flex',
            alignItems: 'center',
            '.u-form-group': {
              flexGrow: 1,
              margin: 0,
              '.u-form-control': {
                height: 36,
                borderRadius: 4,
                '.MuiInputBase-input': {
                  padding: '8px 12px',
                  '&::placeholder': {
                    opacity: 0.26
                  }
                }
              }
            },
            '.btn': {
              padding: 0,
              marginLeft: 8,
              '&.with-icon': {
                '&.btn-default': {
                  svg: {
                    path: {
                      stroke: theme.palette.grey[300]
                    }
                  },
                  '&:hover': {
                    svg: {
                      path: {
                        stroke: theme.palette.grey[300]
                      }
                    }
                  },
                  '&:focus': {
                    svg: {
                      path: {
                        stroke: theme.palette.grey[300]
                      }
                    },
                    '&:hover': {
                      svg: {
                        path: {
                          stroke: theme.palette.grey[300]
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      '.u-table-body': {
        tr: {
          td: {
            backgroundColor: 'transparent',
            color: theme.palette.grey[600],
            lineHeight: theme.typography.subtitle2.lineHeight,
            padding: '12px 15px 12px 15px',
            borderTop: '1px solid',
            borderTopColor: theme.palette.divider,
            borderBottom: 'none',
            minWidth: 200,
            maxWidth: 200,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            '&.checkbox-cell': {
              padding: '12px !important',
              width: 24,
              minWidth: 24,
              maxWidth: '100%',
              '&.fixed-cell': {
                left: 0
              }
            },
            '&.action-cell': {
              padding: '4px !important',
              width: 48,
              minWidth: 48,
              maxWidth: '100%',
              '&.fixed-cell': {
                right: 0
              }
            },
            '&.img-cell': {
              width: 80,
              padding: '4px !important',
              textAlign: 'center',
              minWidth: 80,
              maxWidth: '100%',
              lineHeight: 0
            },
            // "&.indent-cell": {
            //   width: "30%",
            //   minWidth:"30%",
            //   maxWidth: "30%",
            // },
            '&.user-img-cell': {
              width: 48,
              minWidth: 48,
              maxWidth: '100%',
              textAlign: 'center',
              padding: 4,
              lineHeight: '12px',
              svg: {
                width: 20,
                height: 20,
                path: {
                  fill: theme.palette.grey[300]
                }
              },
              '.user-image': {
                width: 32,
                height: 32,
                borderRadius: '50%',
                overflow: 'hidden',
                img: {
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center center'
                }
              }
            },
            '&.toggle-cell': {
              width: 48,
              minWidth: 48,
              maxWidth: '100%',
              textAlign: 'center',
              padding: 4,
              marginRight: 0
            }
          },
          '&:nth-child(even)': {
            td: {
              backgroundColor: theme.palette.common.white
            }
          },
          '&:nth-child(odd)': {
            td: {
              backgroundColor: '#F8F8F8'
            }
          },
          '&.child-tr': {
            '.group-title': {
              maxWidth: 200,
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              overflow: 'hidden'
            },
            '&:hover': {
              td: {
                backgroundColor: '#dddfe5'
              }
            }
          },
          '&:first-child': {
            td: {
              borderTopColor: 'transparent'
            }
          }
        }
      },
      '.u-multi-table-wrap': {
        '.u-multi-table-container': {
          padding: '0',
          border: 'none',
          overflow: 'initial',
          '.u-table': {
            border: 'none',
            '.u-table-body': {
              tr: {
                '&.child-tr': {
                  '&:nth-child(even)': {
                    td: {
                      backgroundColor: '#F8F8F8'
                    }
                  },
                  '&:nth-child(odd)': {
                    td: {
                      backgroundColor: theme.palette.common.white
                    }
                  },
                  '&:hover': {
                    td: {
                      backgroundColor: '#E5E9F5'
                    }
                  }
                },
                '&.level-two': {
                  '.indent-cell': {
                    '.group-title': {
                      position: 'relative',
                      left: 28,
                      maxWidth: 'calc(100% - 28px)',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden'
                    }
                  }
                },
                '&.level-three': {
                  '.indent-cell': {
                    '.group-title': {
                      position: 'relative',
                      left: 52,
                      maxWidth: 'calc(100% - 52px)',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                      '.toggle-btn': {
                        PointerEvent: 'none',
                        opacity: 0,
                        visibility: 'hidden'
                      }
                    }
                  }
                },
                '&:first-child': {
                  td: {
                    borderTopColor: theme.palette.divider
                  }
                }
              }
            }
          }
        },
        '.MuiAccordion-root': {
          borderRadius: 0,
          boxShadow: 'none',
          '.MuiAccordionSummary-root': {
            height: 0,
            minHeight: 0,
            padding: 0
          }
        },
        '.MuiAccordionDetails-root': {
          padding: 0
        }
      },
      '.toggle-btn': {
        cursor: 'pointer',
        verticalAlign: -6,
        marginRight: 8
      },
      '.checkbox-cell': {
        width: 24,
        '.custom-checkbox-wrap': {
          width: 24,
          height: 24,
          margin: 'auto',
          '.u-custom-control-label': {
            marginBottom: 0
          }
        }
      },
      '.action-cell': {
        '.btn': {
          padding: 0,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          '&.with-icon': {
            '&.btn-default': {
              svg: {
                path: {
                  stroke: theme.palette.grey[300]
                }
              },
              '&:hover': {
                svg: {
                  path: {
                    stroke: theme.palette.grey[300]
                  }
                }
              },
              '&:focus': {
                svg: {
                  path: {
                    stroke: theme.palette.grey[300]
                  }
                },
                '&:hover': {
                  svg: {
                    path: {
                      stroke: theme.palette.grey[300]
                    }
                  }
                }
              }
            }
          }
        }
      },
      '.img-cell': {
        '.prd-img': {
          maxHeight: 35,
          maxWidth: '100%'
        }
      },
      '.editable-cell': {
        '.cell-content': {
          display: 'flex',
          alignItems: 'center',
          '.btn': {
            padding: 0,
            marginLeft: 8,
            '&.with-icon': {
              '&.btn-default': {
                svg: {
                  path: {
                    stroke: theme.palette.grey[300]
                  }
                },
                '&:hover': {
                  svg: {
                    path: {
                      stroke: theme.palette.grey[300]
                    }
                  }
                },
                '&:focus': {
                  svg: {
                    path: {
                      stroke: theme.palette.grey[300]
                    }
                  },
                  '&:hover': {
                    svg: {
                      path: {
                        stroke: theme.palette.grey[300]
                      }
                    }
                  }
                }
              }
            }
          },
          '.u-form-group': {
            flexGrow: 1,
            margin: 0,
            '.u-form-control': {
              height: 36,
              borderRadius: 4,
              '.MuiInputBase-input': {
                fontSize: theme.typography.body2.fontSize,
                padding: '8px 8px',
                '&::placeholder': {
                  opacity: 0.26
                }
              }
            }
          }
        }
      },
      '.text-right': {
        textAlign: 'right'
      },
      '.text-center': {
        textAlign: 'center'
      },
      '.text-capitalize': {
        textTransform: 'capitalize'
      },
      '.text-uppercase': {
        textTransform: 'uppercase'
      },
      '.fixed-cell': {
        position: 'sticky',
        zIndex: 1000
      }
    },
    '&.basic-table': {
      '.u-table': {
        tableLayout: 'auto'
      }
    },
    '.status-indicator': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      display: 'inline-block',
      backgroundColor: theme.palette.primary.main,
      marginRight: 8,
      '&.ind-danger': {
        backgroundColor: theme.palette.error.main
      },
      '&.ind-success': {
        backgroundColor: theme.palette.success.main
      }
    }
  }
}))

const DataTable: React.FC<IDataTable> = ({ theme, variant, theadChildren, tbodyChildren }: IDataTable) => {
  return (
    <CustomTable theme={theme} className={clsx({ 'u-table-wrap': true, 'basic-table': variant === 'basic' })}>
      <TableContainer className="u-table-container" component={Paper}>
        <Table className="u-table">
          <TableHead className="u-table-head">
            {theadChildren}
          </TableHead>
          <TableBody className="u-table-body">
            {tbodyChildren}
          </TableBody>
        </Table>
      </TableContainer>
    </CustomTable>
  )
}

export default DataTable
