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
import type { JournalTransApi } from './JournalTransApi';
import { NoYes } from './NoYes';
import { VendorOperationTypeMx } from './VendorOperationTypeMx';
import { JournalTables, JournalTablesType } from './JournalTables';
import { ProjectResources, ProjectResourcesType } from './ProjectResources';
import {
  ResourceCategories,
  ResourceCategoriesType
} from './ResourceCategories';
import {
  ProjectLineProperties,
  ProjectLinePropertiesType
} from './ProjectLineProperties';
import { Projects, ProjectsType } from './Projects';
import { LegalEntities, LegalEntitiesType } from './LegalEntities';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  ProjectCategoryEntities,
  ProjectCategoryEntitiesType
} from './ProjectCategoryEntities';

/**
 * This class represents the entity "JournalTrans" of service "d365_metadata".
 */
export class JournalTrans<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements JournalTransType<T>
{
  /**
   * Technical entity name for JournalTrans.
   */
  static override _entityName = 'JournalTrans';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JournalTrans entity.
   */
  static _keys = ['dataAreaId', 'LineNumber', 'JournalId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Journal Id.
   */
  declare journalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Group.
   * @nullable
   */
  declare priceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Percentage Complete.
   */
  declare percentageComplete: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Category.
   * @nullable
   */
  declare category?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Sales Tax Group.
   * @nullable
   */
  declare itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Id.
   * @nullable
   */
  declare currencyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Id.
   * @nullable
   */
  declare transactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost.
   * @nullable
   */
  declare cost?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reversing Entry.
   * @nullable
   */
  declare reversingEntry?: NoYes | null;
  /**
   * Activity Number.
   * @nullable
   */
  declare activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Psa Wrk Ctr Id.
   * @nullable
   */
  declare psaWrkCtrId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reversing Date.
   */
  declare reversingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Resource Company Id.
   * @nullable
   */
  declare resourceCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher Date.
   */
  declare voucherDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Line Property.
   * @nullable
   */
  declare lineProperty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Time.
   */
  declare endTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Start Time.
   */
  declare startTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Resource Category Id.
   * @nullable
   */
  declare resourceCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Resource Id.
   * @nullable
   */
  declare resourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Date.
   */
  declare projectDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Cost Price.
   */
  declare costPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Type Of Operation.
   * @nullable
   */
  declare typeOfOperation?: VendorOperationTypeMx | null;
  /**
   * Sales Tax Group.
   * @nullable
   */
  declare salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hours.
   */
  declare hours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link JournalTables} entity.
   */
  declare journalTable?: JournalTables<T> | null;
  /**
   * One-to-one navigation property to the {@link ProjectResources} entity.
   */
  declare projectResource?: ProjectResources<T> | null;
  /**
   * One-to-one navigation property to the {@link ResourceCategories} entity.
   */
  declare resourceCategory?: ResourceCategories<T> | null;
  /**
   * One-to-one navigation property to the {@link ProjectLineProperties} entity.
   */
  declare projectLineProperty?: ProjectLineProperties<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  declare project?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link LegalEntities} entity.
   */
  declare legalEntity?: LegalEntities<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link ProjectCategoryEntities} entity.
   */
  declare projectCategoryEntity?: ProjectCategoryEntities<T> | null;

  constructor(_entityApi: JournalTransApi<T>) {
    super(_entityApi);
  }
}

export interface JournalTransType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  journalId: DeserializedType<T, 'Edm.String'>;
  priceGroup?: DeserializedType<T, 'Edm.String'> | null;
  percentageComplete: DeserializedType<T, 'Edm.Decimal'>;
  category?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  currencyId?: DeserializedType<T, 'Edm.String'> | null;
  transactionId?: DeserializedType<T, 'Edm.String'> | null;
  cost?: DeserializedType<T, 'Edm.String'> | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reversingEntry?: NoYes | null;
  activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  psaWrkCtrId?: DeserializedType<T, 'Edm.String'> | null;
  reversingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  resourceCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  voucherDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lineProperty?: DeserializedType<T, 'Edm.String'> | null;
  endTime: DeserializedType<T, 'Edm.Int32'>;
  startTime: DeserializedType<T, 'Edm.Int32'>;
  resourceCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  resourceId?: DeserializedType<T, 'Edm.String'> | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  projectDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  costPrice: DeserializedType<T, 'Edm.Decimal'>;
  typeOfOperation?: VendorOperationTypeMx | null;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  hours: DeserializedType<T, 'Edm.Decimal'>;
  journalTable?: JournalTablesType<T> | null;
  projectResource?: ProjectResourcesType<T> | null;
  resourceCategory?: ResourceCategoriesType<T> | null;
  projectLineProperty?: ProjectLinePropertiesType<T> | null;
  project?: ProjectsType<T> | null;
  legalEntity?: LegalEntitiesType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  projectCategoryEntity?: ProjectCategoryEntitiesType<T> | null;
}
