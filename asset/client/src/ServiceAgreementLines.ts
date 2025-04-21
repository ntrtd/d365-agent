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
import type { ServiceAgreementLinesApi } from './ServiceAgreementLinesApi';
import { NoYes } from './NoYes';
import { SmaTransactionType } from './SmaTransactionType';
import { SmaItemSetupType } from './SmaItemSetupType';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import { Warehouses, WarehousesType } from './Warehouses';
import { UnitsOfMeasure, UnitsOfMeasureType } from './UnitsOfMeasure';
import { Workers, WorkersType } from './Workers';
import { Projects, ProjectsType } from './Projects';
import { OperationalSites, OperationalSitesType } from './OperationalSites';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  ServiceAgreementHeaders,
  ServiceAgreementHeadersType
} from './ServiceAgreementHeaders';

/**
 * This class represents the entity "ServiceAgreementLines" of service "d365_metadata".
 */
export class ServiceAgreementLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ServiceAgreementLinesType<T>
{
  /**
   * Technical entity name for ServiceAgreementLines.
   */
  static override _entityName = 'ServiceAgreementLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ServiceAgreementLines entity.
   */
  static _keys = ['dataAreaId', 'ServiceAgreementId', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Service Agreement Id.
   */
  declare serviceAgreementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Activity Number.
   * @nullable
   */
  declare projectActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Tax Group Code.
   * @nullable
   */
  declare projectTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Quantity.
   */
  declare itemQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Ledger Dimension Display Value.
   * @nullable
   */
  declare defaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Project Category Id.
   * @nullable
   */
  declare projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Object Id.
   * @nullable
   */
  declare serviceObjectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Line Suspended.
   * @nullable
   */
  declare isLineSuspended?: NoYes | null;
  /**
   * Service Start After Time.
   */
  declare serviceStartAfterTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Service Object Relation Id.
   * @nullable
   */
  declare serviceObjectRelationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Description.
   * @nullable
   */
  declare lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Note.
   * @nullable
   */
  declare lineNote?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service End Before Time.
   */
  declare serviceEndBeforeTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Period End Date.
   */
  declare periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Service Inventory Agreement Warehouse Id.
   * @nullable
   */
  declare serviceInventoryAgreementWarehouseId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Service Interval Id.
   * @nullable
   */
  declare serviceIntervalId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hours.
   */
  declare hours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Project Description.
   * @nullable
   */
  declare projectDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Unit Symbol.
   * @nullable
   */
  declare itemUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Tax Item Group Code.
   * @nullable
   */
  declare projectTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Personnel Number.
   * @nullable
   */
  declare workerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Transaction Type.
   * @nullable
   */
  declare serviceTransactionType?: SmaTransactionType | null;
  /**
   * Expense Quantity.
   */
  declare expenseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Period Start Date.
   */
  declare periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Project Customer Account Number.
   * @nullable
   */
  declare projectCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Service Inventory Agreement Warehouse Location Id.
   * @nullable
   */
  declare serviceInventoryAgreementWarehouseLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Service Time Window Id.
   * @nullable
   */
  declare serviceTimeWindowId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Setup.
   * @nullable
   */
  declare itemSetup?: SmaItemSetupType | null;
  /**
   * Project Sales Currency Code.
   * @nullable
   */
  declare projectSalesCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Serial Number.
   * @nullable
   */
  declare itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Task Id.
   * @nullable
   */
  declare serviceTaskId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Inventory Agreement Site Id.
   * @nullable
   */
  declare serviceInventoryAgreementSiteId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Project Line Property Id.
   * @nullable
   */
  declare projectLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProduct?: ReleasedProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare receivingWarehouse?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link UnitsOfMeasure} entity.
   */
  declare unit?: UnitsOfMeasure<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  declare project?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link OperationalSites} entity.
   */
  declare receivingSite?: OperationalSites<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare defaultDimensionDimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link ServiceAgreementHeaders} entity.
   */
  declare serviceAgreementHeader?: ServiceAgreementHeaders<T> | null;

  constructor(_entityApi: ServiceAgreementLinesApi<T>) {
    super(_entityApi);
  }
}

export interface ServiceAgreementLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  serviceAgreementId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Int32'>;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  projectActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  projectTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  itemQuantity: DeserializedType<T, 'Edm.Decimal'>;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  serviceObjectId?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  isLineSuspended?: NoYes | null;
  serviceStartAfterTime: DeserializedType<T, 'Edm.Int32'>;
  serviceObjectRelationId?: DeserializedType<T, 'Edm.String'> | null;
  lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  lineNote?: DeserializedType<T, 'Edm.String'> | null;
  serviceEndBeforeTime: DeserializedType<T, 'Edm.Int32'>;
  periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  serviceInventoryAgreementWarehouseId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  serviceIntervalId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  hours: DeserializedType<T, 'Edm.Decimal'>;
  projectDescription?: DeserializedType<T, 'Edm.String'> | null;
  itemUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  projectTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  workerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  serviceTransactionType?: SmaTransactionType | null;
  expenseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projectCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  serviceInventoryAgreementWarehouseLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  serviceTimeWindowId?: DeserializedType<T, 'Edm.String'> | null;
  itemSetup?: SmaItemSetupType | null;
  projectSalesCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  serviceTaskId?: DeserializedType<T, 'Edm.String'> | null;
  serviceInventoryAgreementSiteId?: DeserializedType<T, 'Edm.String'> | null;
  projectLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  releasedProduct?: ReleasedProductsV2Type<T> | null;
  receivingWarehouse?: WarehousesType<T> | null;
  unit?: UnitsOfMeasureType<T> | null;
  worker?: WorkersType<T> | null;
  project?: ProjectsType<T> | null;
  receivingSite?: OperationalSitesType<T> | null;
  defaultDimensionDimensionSet?: DimensionSetsType<T> | null;
  serviceAgreementHeader?: ServiceAgreementHeadersType<T> | null;
}
