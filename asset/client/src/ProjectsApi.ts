/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Projects } from './Projects';
import { ProjectsRequestBuilder } from './ProjectsRequestBuilder';
import { SalesOrderHeadersV4Api } from './SalesOrderHeadersV4Api';
import { JournalTransApi } from './JournalTransApi';
import { BeginningBalanceCostSaleTransactionsApi } from './BeginningBalanceCostSaleTransactionsApi';
import { ProjectEmplForecastsApi } from './ProjectEmplForecastsApi';
import { PurchaseAgreementConfirmationLinesApi } from './PurchaseAgreementConfirmationLinesApi';
import { PurchaseRequisitionLinesV2Api } from './PurchaseRequisitionLinesV2Api';
import { PurchaseOrderLinesApi } from './PurchaseOrderLinesApi';
import { UbuyPurchaseRequisitionLinesApi } from './UbuyPurchaseRequisitionLinesApi';
import { ProjectExpenseForecastsApi } from './ProjectExpenseForecastsApi';
import { BeginningBalanceOnAccTransactionsApi } from './BeginningBalanceOnAccTransactionsApi';
import { PersonProjectRolesApi } from './PersonProjectRolesApi';
import { PurchaseOrderConfirmationLinesApi } from './PurchaseOrderConfirmationLinesApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { ProjectItemJournalTransApi } from './ProjectItemJournalTransApi';
import { PurchaseAgreementsApi } from './PurchaseAgreementsApi';
import { CdsSalesOrderHeadersApi } from './CdsSalesOrderHeadersApi';
import { PurchaseOrderConfirmationHeadersApi } from './PurchaseOrderConfirmationHeadersApi';
import { SalesAgreementConfirmationLinesApi } from './SalesAgreementConfirmationLinesApi';
import { SalesAgreementLinesApi } from './SalesAgreementLinesApi';
import { ProjectWbsDraftsApi } from './ProjectWbsDraftsApi';
import { PurchaseAgreementLinesApi } from './PurchaseAgreementLinesApi';
import { BeginningBalanceFeeTransactionsApi } from './BeginningBalanceFeeTransactionsApi';
import { AssetMaintenanceWorkOrderParentProjectsV2Api } from './AssetMaintenanceWorkOrderParentProjectsV2Api';
import { PurchaseOrderHeadersApi } from './PurchaseOrderHeadersApi';
import { ClmIntegrationPurchaseAgreementLinesApi } from './ClmIntegrationPurchaseAgreementLinesApi';
import { PurchaseRequisitionLinesApi } from './PurchaseRequisitionLinesApi';
import { ServiceAgreementHeadersApi } from './ServiceAgreementHeadersApi';
import { ServiceOrderHeadersApi } from './ServiceOrderHeadersApi';
import { ProjectOnAccForecastsApi } from './ProjectOnAccForecastsApi';
import { AssetMaintenanceWorkOrderParentProjectsApi } from './AssetMaintenanceWorkOrderParentProjectsApi';
import { ProjectItemForecastsApi } from './ProjectItemForecastsApi';
import { ServiceAgreementLinesApi } from './ServiceAgreementLinesApi';
import { ProjectDefaultOffsetAccountsApi } from './ProjectDefaultOffsetAccountsApi';
import { ServiceOrderLinesApi } from './ServiceOrderLinesApi';
import { ProjectFeeForecastsApi } from './ProjectFeeForecastsApi';
import { ClmIntegrationPurchaseAgreementsApi } from './ClmIntegrationPurchaseAgreementsApi';
import { NoYes } from './NoYes';
import { PsaProjTask } from './PsaProjTask';
import { PsapReqControl } from './PsapReqControl';
import { PsaResSchedStatus } from './PsaResSchedStatus';
import { ProjBudgetaryControlOn } from './ProjBudgetaryControlOn';
import { PsaInvoiceMethod } from './PsaInvoiceMethod';
import { PsaProjTrackCost } from './PsaProjTrackCost';
import { BankLgDocumentType } from './BankLgDocumentType';
import { PsaConstraintType } from './PsaConstraintType';
import { PsapReqValidate } from './PsapReqValidate';
import { DetailSummary } from './DetailSummary';
import { ProjBudgetManagement } from './ProjBudgetManagement';
import { ProjStatus } from './ProjStatus';
import { PsaProjStatus } from './PsaProjStatus';
import { ProjLedgerPosting } from './ProjLedgerPosting';
import { ProjBudgetOverrunOption } from './ProjBudgetOverrunOption';
import { ProjLinePropertySearch } from './ProjLinePropertySearch';
import { PsaProjTimeMeasure } from './PsaProjTimeMeasure';
import { ProjType } from './ProjType';
import { ProjBudgetInterval } from './ProjBudgetInterval';
import { JmgJobPayTypeEnum } from './JmgJobPayTypeEnum';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ProjectsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Projects<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): ProjectsApi<DeSerializersT> {
    return new ProjectsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link salesOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_HEADERS: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      SalesOrderHeadersV4Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link journalTrans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_TRANS: OneToOneLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      JournalTransApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link beginningBalanceCostSaleTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BEGINNING_BALANCE_COST_SALE_TRANSACTION: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      BeginningBalanceCostSaleTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectEmplForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_EMPL_FORECAST: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      ProjectEmplForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_LINES_V_2: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      PurchaseRequisitionLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_LINES: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ubuyPurchaseRequisitionLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UBUY_PURCHASE_REQUISITION_LINES: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      UbuyPurchaseRequisitionLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectExpenseForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_EXPENSE_FORECAST: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      ProjectExpenseForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link beginningBalanceOnAccTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BEGINNING_BALANCE_ON_ACC_TRANSACTION: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      BeginningBalanceOnAccTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personProjectRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_PROJECT_ROLE: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      PersonProjectRolesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderConfirmationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_CONFIRMATION_LINES: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectItemJournalTrans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_ITEM_JOURNAL_TRANS: OneToOneLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      ProjectItemJournalTransApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesOrderHeadersCds} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_HEADERS_CDS: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      CdsSalesOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderConfirmationHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_CONFIRMATION_HEADERS: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderConfirmationHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementConfirmationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_CONFIRMATION_LINES: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      SalesAgreementConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_LINES: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      SalesAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link wbs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WBS: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      ProjectWbsDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_LINE: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link beginningBalanceFeeTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BEGINNING_BALANCE_FEE_TRANSACTION: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      BeginningBalanceFeeTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderParentProjectsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_PARENT_PROJECTS_V_2: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderParentProjectsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDERS: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_LINES: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseRequisitionLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_REQUISITION_LINES: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      PurchaseRequisitionLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_AGREEMENT_HEADERS: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      ServiceAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_ORDER_HEADERS: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      ServiceOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectOnAccForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_ON_ACC_FORECAST: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      ProjectOnAccForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderParentProject} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_PARENT_PROJECT: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderParentProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectItemForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_ITEM_FORECAST: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      ProjectItemForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_AGREEMENT_LINES: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      ServiceAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectDefaultOffsetAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_DEFAULT_OFFSET_ACCOUNT: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      ProjectDefaultOffsetAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceOrderLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_ORDER_LINES: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      ServiceOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectFeeForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_FEE_FORECAST: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      ProjectFeeForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SalesOrderHeadersV4Api<DeSerializersT>,
      JournalTransApi<DeSerializersT>,
      BeginningBalanceCostSaleTransactionsApi<DeSerializersT>,
      ProjectEmplForecastsApi<DeSerializersT>,
      PurchaseAgreementConfirmationLinesApi<DeSerializersT>,
      PurchaseRequisitionLinesV2Api<DeSerializersT>,
      PurchaseOrderLinesApi<DeSerializersT>,
      UbuyPurchaseRequisitionLinesApi<DeSerializersT>,
      ProjectExpenseForecastsApi<DeSerializersT>,
      BeginningBalanceOnAccTransactionsApi<DeSerializersT>,
      PersonProjectRolesApi<DeSerializersT>,
      PurchaseOrderConfirmationLinesApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      ProjectItemJournalTransApi<DeSerializersT>,
      PurchaseAgreementsApi<DeSerializersT>,
      CdsSalesOrderHeadersApi<DeSerializersT>,
      PurchaseOrderConfirmationHeadersApi<DeSerializersT>,
      SalesAgreementConfirmationLinesApi<DeSerializersT>,
      SalesAgreementLinesApi<DeSerializersT>,
      ProjectWbsDraftsApi<DeSerializersT>,
      PurchaseAgreementLinesApi<DeSerializersT>,
      BeginningBalanceFeeTransactionsApi<DeSerializersT>,
      AssetMaintenanceWorkOrderParentProjectsV2Api<DeSerializersT>,
      PurchaseOrderHeadersApi<DeSerializersT>,
      ClmIntegrationPurchaseAgreementLinesApi<DeSerializersT>,
      PurchaseRequisitionLinesApi<DeSerializersT>,
      ServiceAgreementHeadersApi<DeSerializersT>,
      ServiceOrderHeadersApi<DeSerializersT>,
      ProjectOnAccForecastsApi<DeSerializersT>,
      AssetMaintenanceWorkOrderParentProjectsApi<DeSerializersT>,
      ProjectItemForecastsApi<DeSerializersT>,
      ServiceAgreementLinesApi<DeSerializersT>,
      ProjectDefaultOffsetAccountsApi<DeSerializersT>,
      ServiceOrderLinesApi<DeSerializersT>,
      ProjectFeeForecastsApi<DeSerializersT>,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SALES_ORDER_HEADERS: new OneToManyLink(
        'SalesOrderHeaders',
        this,
        linkedApis[0]
      ),
      JOURNAL_TRANS: new OneToOneLink('JournalTrans', this, linkedApis[1]),
      BEGINNING_BALANCE_COST_SALE_TRANSACTION: new OneToManyLink(
        'BeginningBalanceCostSaleTransaction',
        this,
        linkedApis[2]
      ),
      PROJECT_EMPL_FORECAST: new OneToManyLink(
        'ProjectEmplForecast',
        this,
        linkedApis[3]
      ),
      PURCHASE_AGREEMENT_LINES_V_2: new OneToManyLink(
        'PurchaseAgreementLinesV2',
        this,
        linkedApis[4]
      ),
      PROJECT: new OneToManyLink('Project', this, linkedApis[5]),
      PURCHASE_ORDER_LINES: new OneToManyLink(
        'PurchaseOrderLines',
        this,
        linkedApis[6]
      ),
      UBUY_PURCHASE_REQUISITION_LINES: new OneToManyLink(
        'UbuyPurchaseRequisitionLines',
        this,
        linkedApis[7]
      ),
      PROJECT_EXPENSE_FORECAST: new OneToManyLink(
        'ProjectExpenseForecast',
        this,
        linkedApis[8]
      ),
      BEGINNING_BALANCE_ON_ACC_TRANSACTION: new OneToManyLink(
        'BeginningBalanceOnAccTransaction',
        this,
        linkedApis[9]
      ),
      PERSON_PROJECT_ROLE: new OneToManyLink(
        'PersonProjectRole',
        this,
        linkedApis[10]
      ),
      PURCHASE_ORDER_CONFIRMATION_LINES: new OneToManyLink(
        'PurchaseOrderConfirmationLines',
        this,
        linkedApis[11]
      ),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[12]),
      PROJECT_ITEM_JOURNAL_TRANS: new OneToOneLink(
        'ProjectItemJournalTrans',
        this,
        linkedApis[13]
      ),
      PURCHASE_AGREEMENT_HEADERS: new OneToManyLink(
        'PurchaseAgreementHeaders',
        this,
        linkedApis[14]
      ),
      SALES_ORDER_HEADERS_CDS: new OneToManyLink(
        'SalesOrderHeadersCDS',
        this,
        linkedApis[15]
      ),
      PURCHASE_ORDER_CONFIRMATION_HEADERS: new OneToManyLink(
        'PurchaseOrderConfirmationHeaders',
        this,
        linkedApis[16]
      ),
      SALES_AGREEMENT_CONFIRMATION_LINES: new OneToManyLink(
        'SalesAgreementConfirmationLines',
        this,
        linkedApis[17]
      ),
      SALES_AGREEMENT_LINES: new OneToManyLink(
        'SalesAgreementLines',
        this,
        linkedApis[18]
      ),
      WBS: new OneToManyLink('WBS', this, linkedApis[19]),
      PURCHASE_AGREEMENT_LINE: new OneToManyLink(
        'PurchaseAgreementLine',
        this,
        linkedApis[20]
      ),
      BEGINNING_BALANCE_FEE_TRANSACTION: new OneToManyLink(
        'BeginningBalanceFeeTransaction',
        this,
        linkedApis[21]
      ),
      ASSET_MAINTENANCE_WORK_ORDER_PARENT_PROJECTS_V_2: new OneToManyLink(
        'AssetMaintenanceWorkOrderParentProjectsV2',
        this,
        linkedApis[22]
      ),
      PURCHASE_ORDERS: new OneToManyLink(
        'PurchaseOrders',
        this,
        linkedApis[23]
      ),
      CLM_INTEGRATION_PURCHASE_AGREEMENT_LINES: new OneToManyLink(
        'CLMIntegrationPurchaseAgreementLines',
        this,
        linkedApis[24]
      ),
      PURCHASE_REQUISITION_LINES: new OneToManyLink(
        'PurchaseRequisitionLines',
        this,
        linkedApis[25]
      ),
      SERVICE_AGREEMENT_HEADERS: new OneToManyLink(
        'ServiceAgreementHeaders',
        this,
        linkedApis[26]
      ),
      SERVICE_ORDER_HEADERS: new OneToManyLink(
        'ServiceOrderHeaders',
        this,
        linkedApis[27]
      ),
      PROJECT_ON_ACC_FORECAST: new OneToManyLink(
        'ProjectOnAccForecast',
        this,
        linkedApis[28]
      ),
      ASSET_MAINTENANCE_WORK_ORDER_PARENT_PROJECT: new OneToManyLink(
        'AssetMaintenanceWorkOrderParentProject',
        this,
        linkedApis[29]
      ),
      PROJECT_ITEM_FORECAST: new OneToManyLink(
        'ProjectItemForecast',
        this,
        linkedApis[30]
      ),
      SERVICE_AGREEMENT_LINES: new OneToManyLink(
        'ServiceAgreementLines',
        this,
        linkedApis[31]
      ),
      PROJECT_DEFAULT_OFFSET_ACCOUNT: new OneToManyLink(
        'ProjectDefaultOffsetAccount',
        this,
        linkedApis[32]
      ),
      SERVICE_ORDER_LINES: new OneToManyLink(
        'ServiceOrderLines',
        this,
        linkedApis[33]
      ),
      PROJECT_FEE_FORECAST: new OneToManyLink(
        'ProjectFeeForecast',
        this,
        linkedApis[34]
      ),
      CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: new OneToManyLink(
        'CLMIntegrationPurchaseAgreementHeaders',
        this,
        linkedApis[35]
      )
    };
    return this;
  }

  entityConstructor = Projects;

  requestBuilder(): ProjectsRequestBuilder<DeSerializersT> {
    return new ProjectsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Projects<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Projects<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Projects<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Projects, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Projects, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFAULT_ON_SUBPROJECTS: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJECT_OR_TASK: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      PsaProjTask,
      true,
      true
    >;
    FIXED_ASSET_NUMBER: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVE_REVISION: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVITY_REQUIRED_FOR_HOUR_TRANSACTION: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERCENT_TO_RETAIN: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_RESP_FINANCIAL_PERSONNEL_NUMBER: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUISITION_OR_PURCHASE_ORDER_CONTROL: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      PsapReqControl,
      true,
      true
    >;
    DATE_OF_CREATION: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SCHEDULE_STATUS: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      PsaResSchedStatus,
      true,
      true
    >;
    ZAKAT_PROJECT_VALUE: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WORKER_RESPONSIBLE_PERSONNEL_NUMBER: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_TYPES_CONTROLLED: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      ProjBudgetaryControlOn,
      true,
      true
    >;
    CATEGORY: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ACTIVITY_REQUIRED_FOR_ITEM_FORECAST: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HEADER: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJECT_TEMPLATE: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICING_METHOD: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      PsaInvoiceMethod,
      true,
      true
    >;
    TRACK_COST: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      PsaProjTrackCost,
      true,
      true
    >;
    IS_ACTIVITY_REQUIRED_FOR_EXPENSE_TRANSACTION: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_COST: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ZAKAT_SUBJECT: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_REVISION: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATION_ID: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TASK_COMPLETELY_SCHEDULED: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUBPROJECT_ID_FORMAT: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECTED_END_DATE: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CAN_USE_ALTERNATE_PROJECT_BUDGET: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SORTING_ID_2: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAN_USE_BUDGET_CONTROL: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXTENSION_DATE: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    UNIT: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_PROJECT: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALTERNATE_PROJECT: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_DOCUMENT_TYPE: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      BankLgDocumentType,
      true,
      true
    >;
    START_DATE_1: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONSTRAINT_TYPE: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      PsaConstraintType,
      true,
      true
    >;
    CUSTOMER_RETENTION_TERM_ID: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALERT_TIME_FRAME_WEEKS: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CALENDAR: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVITY_REQUIRED_FOR_HOUR_FORECAST: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_ACCOUNT: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOUR_VALIDATION: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      PsapReqValidate,
      true,
      true
    >;
    START_TIME: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ZAKAT_CONTRACT_PERIOD: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ZAKAT_CONTRACT_DATE: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_ACTIVITY_REQUIRED_FOR_EXPENSE_FORECAST: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ACTIVITY_REQUIRED_FOR_ITEM_TRANSACTION: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTING_LEVEL: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      DetailSummary,
      true,
      true
    >;
    TEMPLATE_APPLIED: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJECTED_START_DATE: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CAN_VERIFY_COST_AGAINST_REMAINING_FORECAST: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PSA_SCHED_IGNORE_CALENDAR: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TELEPHONE: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_BUDGET_MANAGEMENT: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      ProjBudgetManagement,
      true,
      true
    >;
    PROJECT_STAGE: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      ProjStatus,
      true,
      true
    >;
    CERTIFIED_PAYROLL: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SORTING_ID_1: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      PsaProjStatus,
      true,
      true
    >;
    CAN_CARRY_FORWARD_REMAINING_BUDGETS: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LEDGER_POSTING_SORT_PRIORITY: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      ProjLedgerPosting,
      true,
      true
    >;
    FAX: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_VALIDATION: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      PsapReqValidate,
      true,
      true
    >;
    ACTUAL_START_DATE: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    JOB_IDENTIFICATION: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_NAME: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUDGET_OVERRUN_DEFAULT: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      ProjBudgetOverrunOption,
      true,
      true
    >;
    SEARCH_PRIORITY: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      ProjLinePropertySearch,
      true,
      true
    >;
    ZAKAT_CONTRACT_AMENDMENT: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_EFFORT_IN_HOURS: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOW_NEGATIVE_BUDGETS_TO_BE_CARRIED_FORWARD: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_INVOICE_ACCOUNT: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_GROUP: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_RESP_SALES_PERSONNEL_NUMBER: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_MEASURE: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      PsaProjTimeMeasure,
      true,
      true
    >;
    SALES_PRICE_GROUP: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_CONTRACT_ID: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_TYPE: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      ProjType,
      true,
      true
    >;
    CONSTRAINT_DATE: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SORTING_ID_3: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_TIME_INCREMENT: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROJECT_GROUP: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_DATE_1: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DURATION_IN_DAYS: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_READY_FOR_INVOICING: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    END_TIME: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MILESTONE: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORKER_ARCHITECT_PERSONNEL_NUMBER: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_NAME: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ESTIMATE_PROJECT_ID: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DURATION_DETERMINES_END_DATE: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BUDGET_CONTROL_INTERVAL: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      ProjBudgetInterval,
      true,
      true
    >;
    ACTUAL_END_DATE: OrderableEdmTypeField<
      Projects<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    JOB_PAY_TYPE: EnumField<
      Projects<DeSerializers>,
      DeSerializersT,
      JmgJobPayTypeEnum,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_HEADERS: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      SalesOrderHeadersV4Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link journalTrans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOURNAL_TRANS: OneToOneLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      JournalTransApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link beginningBalanceCostSaleTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BEGINNING_BALANCE_COST_SALE_TRANSACTION: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      BeginningBalanceCostSaleTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectEmplForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_EMPL_FORECAST: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      ProjectEmplForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_LINES_V_2: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link project} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      PurchaseRequisitionLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_LINES: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ubuyPurchaseRequisitionLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UBUY_PURCHASE_REQUISITION_LINES: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      UbuyPurchaseRequisitionLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectExpenseForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_EXPENSE_FORECAST: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      ProjectExpenseForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link beginningBalanceOnAccTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BEGINNING_BALANCE_ON_ACC_TRANSACTION: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      BeginningBalanceOnAccTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personProjectRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_PROJECT_ROLE: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      PersonProjectRolesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderConfirmationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_CONFIRMATION_LINES: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectItemJournalTrans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_ITEM_JOURNAL_TRANS: OneToOneLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      ProjectItemJournalTransApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesOrderHeadersCds} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_HEADERS_CDS: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      CdsSalesOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrderConfirmationHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_CONFIRMATION_HEADERS: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderConfirmationHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementConfirmationLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_CONFIRMATION_LINES: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      SalesAgreementConfirmationLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_LINES: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      SalesAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link wbs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WBS: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      ProjectWbsDraftsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseAgreementLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_LINE: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link beginningBalanceFeeTransaction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BEGINNING_BALANCE_FEE_TRANSACTION: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      BeginningBalanceFeeTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderParentProjectsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_PARENT_PROJECTS_V_2: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderParentProjectsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDERS: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_LINES: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseRequisitionLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_REQUISITION_LINES: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      PurchaseRequisitionLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_AGREEMENT_HEADERS: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      ServiceAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_ORDER_HEADERS: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      ServiceOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectOnAccForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_ON_ACC_FORECAST: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      ProjectOnAccForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetMaintenanceWorkOrderParentProject} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_WORK_ORDER_PARENT_PROJECT: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderParentProjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectItemForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_ITEM_FORECAST: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      ProjectItemForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceAgreementLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_AGREEMENT_LINES: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      ServiceAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectDefaultOffsetAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_DEFAULT_OFFSET_ACCOUNT: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      ProjectDefaultOffsetAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceOrderLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_ORDER_LINES: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      ServiceOrderLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link projectFeeForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_FEE_FORECAST: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      ProjectFeeForecastsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link clmIntegrationPurchaseAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CLM_INTEGRATION_PURCHASE_AGREEMENT_HEADERS: OneToManyLink<
      Projects<DeSerializersT>,
      DeSerializersT,
      ClmIntegrationPurchaseAgreementsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Projects<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link defaultOnSubprojects} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_ON_SUBPROJECTS: fieldBuilder.buildEnumField(
          'DefaultOnSubprojects',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link projectOrTask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_OR_TASK: fieldBuilder.buildEnumField(
          'ProjectOrTask',
          PsaProjTask,
          true
        ),
        /**
         * Static representation of the {@link fixedAssetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_ASSET_NUMBER: fieldBuilder.buildEdmTypeField(
          'FixedAssetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activeRevision} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_REVISION: fieldBuilder.buildEdmTypeField(
          'ActiveRevision',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isActivityRequiredForHourTransaction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVITY_REQUIRED_FOR_HOUR_TRANSACTION: fieldBuilder.buildEnumField(
          'IsActivityRequiredForHourTransaction',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link percentToRetain} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENT_TO_RETAIN: fieldBuilder.buildEdmTypeField(
          'PercentToRetain',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link email} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', true),
        /**
         * Static representation of the {@link workerRespFinancialPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_RESP_FINANCIAL_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkerRespFinancialPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requisitionOrPurchaseOrderControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUISITION_OR_PURCHASE_ORDER_CONTROL: fieldBuilder.buildEnumField(
          'RequisitionOrPurchaseOrderControl',
          PsapReqControl,
          true
        ),
        /**
         * Static representation of the {@link dateOfCreation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_OF_CREATION: fieldBuilder.buildEdmTypeField(
          'DateOfCreation',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link scheduleStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_STATUS: fieldBuilder.buildEnumField(
          'ScheduleStatus',
          PsaResSchedStatus,
          true
        ),
        /**
         * Static representation of the {@link zakatProjectValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZAKAT_PROJECT_VALUE: fieldBuilder.buildEdmTypeField(
          'ZakatProjectValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link workerResponsiblePersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_RESPONSIBLE_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkerResponsiblePersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionTypesControlled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPES_CONTROLLED: fieldBuilder.buildEnumField(
          'TransactionTypesControlled',
          ProjBudgetaryControlOn,
          true
        ),
        /**
         * Static representation of the {@link category} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY: fieldBuilder.buildEnumField('Category', NoYes, true),
        /**
         * Static representation of the {@link isActivityRequiredForItemForecast} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVITY_REQUIRED_FOR_ITEM_FORECAST: fieldBuilder.buildEnumField(
          'IsActivityRequiredForItemForecast',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link header} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER: fieldBuilder.buildEnumField('Header', NoYes, true),
        /**
         * Static representation of the {@link projectTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_TEMPLATE: fieldBuilder.buildEnumField(
          'ProjectTemplate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link invoicingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICING_METHOD: fieldBuilder.buildEnumField(
          'InvoicingMethod',
          PsaInvoiceMethod,
          true
        ),
        /**
         * Static representation of the {@link trackCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACK_COST: fieldBuilder.buildEnumField(
          'TrackCost',
          PsaProjTrackCost,
          true
        ),
        /**
         * Static representation of the {@link isActivityRequiredForExpenseTransaction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVITY_REQUIRED_FOR_EXPENSE_TRANSACTION:
          fieldBuilder.buildEnumField(
            'IsActivityRequiredForExpenseTransaction',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link invoiceCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_COST: fieldBuilder.buildEnumField('InvoiceCost', NoYes, true),
        /**
         * Static representation of the {@link zakatSubject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZAKAT_SUBJECT: fieldBuilder.buildEdmTypeField(
          'ZakatSubject',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalRevision} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_REVISION: fieldBuilder.buildEdmTypeField(
          'ExternalRevision',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link locationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'LocationID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taskCompletelyScheduled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_COMPLETELY_SCHEDULED: fieldBuilder.buildEnumField(
          'TaskCompletelyScheduled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link subprojectIdFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBPROJECT_ID_FORMAT: fieldBuilder.buildEdmTypeField(
          'SubprojectIDFormat',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectedEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECTED_END_DATE: fieldBuilder.buildEdmTypeField(
          'ProjectedEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link canUseAlternateProjectBudget} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_USE_ALTERNATE_PROJECT_BUDGET: fieldBuilder.buildEnumField(
          'CanUseAlternateProjectBudget',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sortingId2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORTING_ID_2: fieldBuilder.buildEdmTypeField(
          'SortingId2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link canUseBudgetControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_USE_BUDGET_CONTROL: fieldBuilder.buildEnumField(
          'CanUseBudgetControl',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link extensionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTENSION_DATE: fieldBuilder.buildEdmTypeField(
          'ExtensionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT: fieldBuilder.buildEdmTypeField('Unit', 'Edm.String', true),
        /**
         * Static representation of the {@link parentProject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_PROJECT: fieldBuilder.buildEdmTypeField(
          'ParentProject',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link date} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE: fieldBuilder.buildEdmTypeField(
          'Date',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link alternateProject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATE_PROJECT: fieldBuilder.buildEdmTypeField(
          'AlternateProject',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankDocumentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_DOCUMENT_TYPE: fieldBuilder.buildEnumField(
          'BankDocumentType',
          BankLgDocumentType,
          true
        ),
        /**
         * Static representation of the {@link startDate1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE_1: fieldBuilder.buildEdmTypeField(
          'StartDate1',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link constraintType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSTRAINT_TYPE: fieldBuilder.buildEnumField(
          'ConstraintType',
          PsaConstraintType,
          true
        ),
        /**
         * Static representation of the {@link customerRetentionTermId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_RETENTION_TERM_ID: fieldBuilder.buildEdmTypeField(
          'CustomerRetentionTermId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link alertTimeFrameWeeks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALERT_TIME_FRAME_WEEKS: fieldBuilder.buildEdmTypeField(
          'AlertTimeFrameWeeks',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link calendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR: fieldBuilder.buildEdmTypeField(
          'Calendar',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isActivityRequiredForHourForecast} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVITY_REQUIRED_FOR_HOUR_FORECAST: fieldBuilder.buildEnumField(
          'IsActivityRequiredForHourForecast',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link customerAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustomerAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hourValidation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUR_VALIDATION: fieldBuilder.buildEnumField(
          'HourValidation',
          PsapReqValidate,
          true
        ),
        /**
         * Static representation of the {@link startTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_TIME: fieldBuilder.buildEdmTypeField(
          'StartTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link zakatContractPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZAKAT_CONTRACT_PERIOD: fieldBuilder.buildEdmTypeField(
          'ZakatContractPeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link zakatContractDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZAKAT_CONTRACT_DATE: fieldBuilder.buildEdmTypeField(
          'ZakatContractDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isActivityRequiredForExpenseForecast} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVITY_REQUIRED_FOR_EXPENSE_FORECAST: fieldBuilder.buildEnumField(
          'IsActivityRequiredForExpenseForecast',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isActivityRequiredForItemTransaction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVITY_REQUIRED_FOR_ITEM_TRANSACTION: fieldBuilder.buildEnumField(
          'IsActivityRequiredForItemTransaction',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postingLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_LEVEL: fieldBuilder.buildEnumField(
          'PostingLevel',
          DetailSummary,
          true
        ),
        /**
         * Static representation of the {@link templateApplied} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_APPLIED: fieldBuilder.buildEnumField(
          'TemplateApplied',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link projectedStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECTED_START_DATE: fieldBuilder.buildEdmTypeField(
          'ProjectedStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link canVerifyCostAgainstRemainingForecast} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_VERIFY_COST_AGAINST_REMAINING_FORECAST: fieldBuilder.buildEnumField(
          'CanVerifyCostAgainstRemainingForecast',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link psaSchedIgnoreCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PSA_SCHED_IGNORE_CALENDAR: fieldBuilder.buildEnumField(
          'PSASchedIgnoreCalendar',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link telephone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TELEPHONE: fieldBuilder.buildEdmTypeField(
          'Telephone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectBudgetManagement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_BUDGET_MANAGEMENT: fieldBuilder.buildEnumField(
          'ProjectBudgetManagement',
          ProjBudgetManagement,
          true
        ),
        /**
         * Static representation of the {@link projectStage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_STAGE: fieldBuilder.buildEnumField(
          'ProjectStage',
          ProjStatus,
          true
        ),
        /**
         * Static representation of the {@link certifiedPayroll} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFIED_PAYROLL: fieldBuilder.buildEnumField(
          'CertifiedPayroll',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sortingId1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORTING_ID_1: fieldBuilder.buildEdmTypeField(
          'SortingId1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', PsaProjStatus, true),
        /**
         * Static representation of the {@link canCarryForwardRemainingBudgets} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_CARRY_FORWARD_REMAINING_BUDGETS: fieldBuilder.buildEnumField(
          'CanCarryForwardRemainingBudgets',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link ledgerPostingSortPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_POSTING_SORT_PRIORITY: fieldBuilder.buildEnumField(
          'LedgerPostingSortPriority',
          ProjLedgerPosting,
          true
        ),
        /**
         * Static representation of the {@link fax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAX: fieldBuilder.buildEdmTypeField('Fax', 'Edm.String', true),
        /**
         * Static representation of the {@link itemValidation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_VALIDATION: fieldBuilder.buildEnumField(
          'ItemValidation',
          PsapReqValidate,
          true
        ),
        /**
         * Static representation of the {@link actualStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_START_DATE: fieldBuilder.buildEdmTypeField(
          'ActualStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link jobIdentification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_IDENTIFICATION: fieldBuilder.buildEdmTypeField(
          'JobIdentification',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link budgetOverrunDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_OVERRUN_DEFAULT: fieldBuilder.buildEnumField(
          'BudgetOverrunDefault',
          ProjBudgetOverrunOption,
          true
        ),
        /**
         * Static representation of the {@link searchPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEARCH_PRIORITY: fieldBuilder.buildEnumField(
          'SearchPriority',
          ProjLinePropertySearch,
          true
        ),
        /**
         * Static representation of the {@link zakatContractAmendment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZAKAT_CONTRACT_AMENDMENT: fieldBuilder.buildEdmTypeField(
          'ZakatContractAmendment',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalEffortInHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_EFFORT_IN_HOURS: fieldBuilder.buildEdmTypeField(
          'TotalEffortInHours',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link allowNegativeBudgetsToBeCarriedForward} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_NEGATIVE_BUDGETS_TO_BE_CARRIED_FORWARD:
          fieldBuilder.buildEnumField(
            'AllowNegativeBudgetsToBeCarriedForward',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link defaultInvoiceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_INVOICE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'DefaultInvoiceAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTaxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'SalesTaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workerRespSalesPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_RESP_SALES_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkerRespSalesPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeMeasure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_MEASURE: fieldBuilder.buildEnumField(
          'TimeMeasure',
          PsaProjTimeMeasure,
          true
        ),
        /**
         * Static representation of the {@link salesPriceGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE_GROUP: fieldBuilder.buildEdmTypeField(
          'SalesPriceGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectContractId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CONTRACT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectContractID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_TYPE: fieldBuilder.buildEnumField(
          'ProjectType',
          ProjType,
          true
        ),
        /**
         * Static representation of the {@link constraintDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSTRAINT_DATE: fieldBuilder.buildEdmTypeField(
          'ConstraintDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sortingId3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORTING_ID_3: fieldBuilder.buildEdmTypeField(
          'SortingId3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link minimumTimeIncrement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_TIME_INCREMENT: fieldBuilder.buildEdmTypeField(
          'MinimumTimeIncrement',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link projectGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_GROUP: fieldBuilder.buildEdmTypeField(
          'ProjectGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link endDate1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE_1: fieldBuilder.buildEdmTypeField(
          'EndDate1',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link durationInDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DURATION_IN_DAYS: fieldBuilder.buildEdmTypeField(
          'DurationInDays',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isReadyForInvoicing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_READY_FOR_INVOICING: fieldBuilder.buildEnumField(
          'IsReadyForInvoicing',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link endTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_TIME: fieldBuilder.buildEdmTypeField('EndTime', 'Edm.Int32', false),
        /**
         * Static representation of the {@link milestone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MILESTONE: fieldBuilder.buildEnumField('Milestone', NoYes, true),
        /**
         * Static representation of the {@link workerArchitectPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_ARCHITECT_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkerArchitectPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_NAME: fieldBuilder.buildEdmTypeField(
          'ProjectName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link estimateProjectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATE_PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'EstimateProjectID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link durationDeterminesEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DURATION_DETERMINES_END_DATE: fieldBuilder.buildEnumField(
          'DurationDeterminesEndDate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link budgetControlInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUDGET_CONTROL_INTERVAL: fieldBuilder.buildEnumField(
          'BudgetControlInterval',
          ProjBudgetInterval,
          true
        ),
        /**
         * Static representation of the {@link actualEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_END_DATE: fieldBuilder.buildEdmTypeField(
          'ActualEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link jobPayType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_PAY_TYPE: fieldBuilder.buildEnumField(
          'JobPayType',
          JmgJobPayTypeEnum,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Projects)
      };
    }

    return this._schema;
  }
}
