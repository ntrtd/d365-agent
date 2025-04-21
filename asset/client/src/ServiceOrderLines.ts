/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { ServiceOrderLinesApi } from './ServiceOrderLinesApi';
import { SmaServiceOrderStatus } from './SmaServiceOrderStatus';
import { SmaTransactionType } from './SmaTransactionType';
import { SmaServiceOrderOrigin } from './SmaServiceOrderOrigin';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { NoYes } from './NoYes';
import { Workers, WorkersType } from './Workers';
import { Activities, ActivitiesType } from './Activities';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import { Projects, ProjectsType } from './Projects';
import {
  ServiceOrderHeaders,
  ServiceOrderHeadersType
} from './ServiceOrderHeaders';
import {
  ServiceAgreementHeaders,
  ServiceAgreementHeadersType
} from './ServiceAgreementHeaders';

/**
 * This class represents the entity "ServiceOrderLines" of service "d365_metadata".
 */
export class ServiceOrderLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ServiceOrderLinesType<T>
{
  /**
   * Technical entity name for ServiceOrderLines.
   */
  static override _entityName = 'ServiceOrderLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ServiceOrderLines entity.
   */
  static _keys = ['dataAreaId', 'ServiceOrderNumber', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Service Order Number.
   */
  declare serviceOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Status.
   * @nullable
   */
  declare lineStatus?: SmaServiceOrderStatus | null;
  /**
   * Service Inventory Status Id.
   * @nullable
   */
  declare serviceInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dispatch Activity Number.
   * @nullable
   */
  declare dispatchActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Description.
   * @nullable
   */
  declare lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Transaction Type.
   * @nullable
   */
  declare serviceTransactionType?: SmaTransactionType | null;
  /**
   * Actual Service End Time.
   */
  declare actualServiceEndTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Service Task Id.
   * @nullable
   */
  declare serviceTaskId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expense Offset Ledger Account Display Value.
   * @nullable
   */
  declare expenseOffsetLedgerAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Servicing Window End Date.
   */
  declare servicingWindowEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Service Agreement Line Number.
   */
  declare serviceAgreementLineNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Service Customer Account Number.
   * @nullable
   */
  declare serviceCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Assigned Technician Personnel Number.
   * @nullable
   */
  declare assignedTechnicianPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Service Start After Time.
   */
  declare serviceStartAfterTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Project Sales Price.
   */
  declare projectSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Tax Group Code.
   * @nullable
   */
  declare salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Origin.
   * @nullable
   */
  declare lineOrigin?: SmaServiceOrderOrigin | null;
  /**
   * Expense Offset Account Type.
   * @nullable
   */
  declare expenseOffsetAccountType?: LedgerJournalAcType | null;
  /**
   * Item Quantity.
   */
  declare itemQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Expense Quantity.
   */
  declare expenseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Project Transaction Id.
   * @nullable
   */
  declare projectTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Servicing Window Start Date.
   */
  declare servicingWindowStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Project Sales Currency Code.
   * @nullable
   */
  declare projectSalesCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Unit Symbol.
   * @nullable
   */
  declare itemUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service End Before Time.
   */
  declare serviceEndBeforeTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Project Activity Number.
   * @nullable
   */
  declare projectActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Item Group Code.
   * @nullable
   */
  declare salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Id.
   * @nullable
   */
  declare invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scheduled Execution Date.
   */
  declare scheduledExecutionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Service Agreement Id.
   * @nullable
   */
  declare serviceAgreementId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Line Signed Off.
   * @nullable
   */
  declare isLineSignedOff?: NoYes | null;
  /**
   * Project Cost Price.
   */
  declare projectCostPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Note.
   * @nullable
   */
  declare lineNote?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Inventory Site Id.
   * @nullable
   */
  declare serviceInventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hours.
   */
  declare hours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Actual Service Start Time.
   */
  declare actualServiceStartTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Category Id.
   * @nullable
   */
  declare projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Line Property Id.
   * @nullable
   */
  declare projectLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Tax Group Code.
   * @nullable
   */
  declare projectTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Tax Item Group Code.
   * @nullable
   */
  declare projectTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Description.
   * @nullable
   */
  declare projectDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Object Id.
   * @nullable
   */
  declare serviceObjectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Object Relation Id.
   * @nullable
   */
  declare serviceObjectRelationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Ledger Dimension Display Value.
   * @nullable
   */
  declare defaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Actual Execution Date.
   */
  declare actualExecutionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Service Inventory Warehouse Id.
   * @nullable
   */
  declare serviceInventoryWarehouseId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare assignedTechnician?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link Activities} entity.
   */
  declare dispatchingActivity?: Activities<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare expenseOffsetLedgerAccount?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare defaultLedgerDimension?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  declare project?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link ServiceOrderHeaders} entity.
   */
  declare serviceOrderHeader?: ServiceOrderHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link ServiceAgreementHeaders} entity.
   */
  declare serviceAgreement?: ServiceAgreementHeaders<T> | null;

  constructor(_entityApi: ServiceOrderLinesApi<T>) {
    super(_entityApi);
  }
}

export interface ServiceOrderLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  serviceOrderNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  lineStatus?: SmaServiceOrderStatus | null;
  serviceInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  dispatchActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  serviceTransactionType?: SmaTransactionType | null;
  actualServiceEndTime: DeserializedType<T, 'Edm.Int32'>;
  serviceTaskId?: DeserializedType<T, 'Edm.String'> | null;
  expenseOffsetLedgerAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  servicingWindowEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  serviceAgreementLineNumber: DeserializedType<T, 'Edm.Int32'>;
  serviceCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  assignedTechnicianPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  serviceStartAfterTime: DeserializedType<T, 'Edm.Int32'>;
  projectSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  lineOrigin?: SmaServiceOrderOrigin | null;
  expenseOffsetAccountType?: LedgerJournalAcType | null;
  itemQuantity: DeserializedType<T, 'Edm.Decimal'>;
  expenseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  projectTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  servicingWindowStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projectSalesCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  itemUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  serviceEndBeforeTime: DeserializedType<T, 'Edm.Int32'>;
  projectActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  scheduledExecutionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  serviceAgreementId?: DeserializedType<T, 'Edm.String'> | null;
  isLineSignedOff?: NoYes | null;
  projectCostPrice: DeserializedType<T, 'Edm.Decimal'>;
  lineNote?: DeserializedType<T, 'Edm.String'> | null;
  serviceInventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  hours: DeserializedType<T, 'Edm.Decimal'>;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  actualServiceStartTime: DeserializedType<T, 'Edm.Int32'>;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  projectLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  projectTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  projectTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  projectDescription?: DeserializedType<T, 'Edm.String'> | null;
  serviceObjectId?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  serviceObjectRelationId?: DeserializedType<T, 'Edm.String'> | null;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  actualExecutionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  serviceInventoryWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  assignedTechnician?: WorkersType<T> | null;
  dispatchingActivity?: ActivitiesType<T> | null;
  expenseOffsetLedgerAccount?: DimensionCombinationsType<T> | null;
  defaultLedgerDimension?: DimensionSetsType<T> | null;
  project?: ProjectsType<T> | null;
  serviceOrderHeader?: ServiceOrderHeadersType<T> | null;
  serviceAgreement?: ServiceAgreementHeadersType<T> | null;
}
