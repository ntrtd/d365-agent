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
import type { ProjectItemJournalTransApi } from './ProjectItemJournalTransApi';
import {
  ProjectLineProperties,
  ProjectLinePropertiesType
} from './ProjectLineProperties';
import { Projects, ProjectsType } from './Projects';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "ProjectItemJournalTrans" of service "d365_metadata".
 */
export class ProjectItemJournalTrans<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectItemJournalTransType<T>
{
  /**
   * Technical entity name for ProjectItemJournalTrans.
   */
  static override _entityName = 'ProjectItemJournalTrans';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectItemJournalTrans entity.
   */
  static _keys = ['dataAreaId', 'JournalId', 'Voucher', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Id.
   */
  declare journalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Voucher.
   */
  declare voucher: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Storage Site Id.
   * @nullable
   */
  declare storageSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dimension Id.
   * @nullable
   */
  declare inventDimensionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Tax Item Group Id.
   * @nullable
   */
  declare projectTaxItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cw Quantity.
   */
  declare cwQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Unit.
   */
  declare priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Activity Number.
   * @nullable
   */
  declare activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Line Property Id.
   * @nullable
   */
  declare projectLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Unit Id.
   * @nullable
   */
  declare projectUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Transaction Return Id.
   * @nullable
   */
  declare inventTransactionReturnId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Category Id.
   * @nullable
   */
  declare projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Amount.
   */
  declare costAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Project Sales Price.
   */
  declare projectSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Project Transaction Id.
   * @nullable
   */
  declare projectTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Sales Currency Id.
   * @nullable
   */
  declare projectSalesCurrencyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Transaction Id.
   * @nullable
   */
  declare inventTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Serial Id.
   * @nullable
   */
  declare inventSerialId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Markup.
   */
  declare costMarkup: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Storage Location Id.
   * @nullable
   */
  declare storageLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Date.
   */
  declare projectDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Storage Warehouse Id.
   * @nullable
   */
  declare storageWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Price.
   */
  declare costPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Project Tax Group Id.
   * @nullable
   */
  declare projectTaxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ProjectLineProperties} entity.
   */
  declare projectLineProperty?: ProjectLineProperties<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  declare project?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: ProjectItemJournalTransApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectItemJournalTransType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalId: DeserializedType<T, 'Edm.String'>;
  voucher: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  storageSiteId?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  inventDimensionId?: DeserializedType<T, 'Edm.String'> | null;
  projectTaxItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  cwQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  projectLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  projectUnitId?: DeserializedType<T, 'Edm.String'> | null;
  inventTransactionReturnId?: DeserializedType<T, 'Edm.String'> | null;
  projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  costAmount: DeserializedType<T, 'Edm.Decimal'>;
  projectSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  projectTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  projectSalesCurrencyId?: DeserializedType<T, 'Edm.String'> | null;
  inventTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  inventSerialId?: DeserializedType<T, 'Edm.String'> | null;
  costMarkup: DeserializedType<T, 'Edm.Decimal'>;
  storageLocationId?: DeserializedType<T, 'Edm.String'> | null;
  projectDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  storageWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  costPrice: DeserializedType<T, 'Edm.Decimal'>;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  projectTaxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  projectLineProperty?: ProjectLinePropertiesType<T> | null;
  project?: ProjectsType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
