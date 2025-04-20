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
import type { ProjectCategoryEntitiesApi } from './ProjectCategoryEntitiesApi';
import { NoYes } from './NoYes';
import { ProjCategoryType } from './ProjCategoryType';
import { ProjCategoryEmplOption } from './ProjCategoryEmplOption';
import { JournalTrans, JournalTransType } from './JournalTrans';
import {
  ProjectQuotationWbsTasks,
  ProjectQuotationWbsTasksType
} from './ProjectQuotationWbsTasks';
import { ProjectWbsDrafts, ProjectWbsDraftsType } from './ProjectWbsDrafts';
import {
  ProjWbsTemplateTasks,
  ProjWbsTemplateTasksType
} from './ProjWbsTemplateTasks';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import {
  ProjWbsActivityEstimates,
  ProjWbsActivityEstimatesType
} from './ProjWbsActivityEstimates';

/**
 * This class represents the entity "ProjectCategoryEntities" of service "d365_metadata".
 */
export class ProjectCategoryEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectCategoryEntitiesType<T>
{
  /**
   * Technical entity name for ProjectCategoryEntities.
   */
  static override _entityName = 'ProjectCategoryEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectCategoryEntities entity.
   */
  static _keys = ['dataAreaId', 'Category'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Category.
   */
  declare category: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Information Service Code.
   * @nullable
   */
  declare fiscalInformationServiceCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Absence.
   * @nullable
   */
  declare absence?: NoYes | null;
  /**
   * Subscription.
   * @nullable
   */
  declare subscription?: NoYes | null;
  /**
   * Category Name.
   * @nullable
   */
  declare categoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Estimate.
   * @nullable
   */
  declare estimate?: NoYes | null;
  /**
   * Indirect Cost Component.
   * @nullable
   */
  declare indirectCostComponent?: NoYes | null;
  /**
   * Item Sales Tax Group.
   * @nullable
   */
  declare itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Payment Retention.
   * @nullable
   */
  declare customerPaymentRetention?: NoYes | null;
  /**
   * Active In Journals.
   * @nullable
   */
  declare activeInJournals?: NoYes | null;
  /**
   * Category Group.
   * @nullable
   */
  declare categoryGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: ProjCategoryType | null;
  /**
   * Item Withholding Tax Group Id.
   * @nullable
   */
  declare itemWithholdingTaxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Rate Type Name.
   * @nullable
   */
  declare taxRateTypeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker.
   * @nullable
   */
  declare worker?: ProjCategoryEmplOption | null;
  /**
   * One-to-one navigation property to the {@link JournalTrans} entity.
   */
  declare journalTrans?: JournalTrans<T> | null;
  /**
   * One-to-many navigation property to the {@link ProjectQuotationWbsTasks} entity.
   */
  declare projectQuotationWbsTask: ProjectQuotationWbsTasks<T>[];
  /**
   * One-to-many navigation property to the {@link ProjectWbsDrafts} entity.
   */
  declare wbs: ProjectWbsDrafts<T>[];
  /**
   * One-to-many navigation property to the {@link ProjWbsTemplateTasks} entity.
   */
  declare projWbsTemplateTask: ProjWbsTemplateTasks<T>[];
  /**
   * One-to-many navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductsV2: ReleasedProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link ProjWbsActivityEstimates} entity.
   */
  declare projWbsActivityEstimate: ProjWbsActivityEstimates<T>[];

  constructor(_entityApi: ProjectCategoryEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectCategoryEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  category: DeserializedType<T, 'Edm.String'>;
  fiscalInformationServiceCode?: DeserializedType<T, 'Edm.String'> | null;
  absence?: NoYes | null;
  subscription?: NoYes | null;
  categoryName?: DeserializedType<T, 'Edm.String'> | null;
  estimate?: NoYes | null;
  indirectCostComponent?: NoYes | null;
  itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  customerPaymentRetention?: NoYes | null;
  activeInJournals?: NoYes | null;
  categoryGroup?: DeserializedType<T, 'Edm.String'> | null;
  transactionType?: ProjCategoryType | null;
  itemWithholdingTaxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  taxRateTypeName?: DeserializedType<T, 'Edm.String'> | null;
  worker?: ProjCategoryEmplOption | null;
  journalTrans?: JournalTransType<T> | null;
  projectQuotationWbsTask: ProjectQuotationWbsTasksType<T>[];
  wbs: ProjectWbsDraftsType<T>[];
  projWbsTemplateTask: ProjWbsTemplateTasksType<T>[];
  releasedProductsV2: ReleasedProductsV2Type<T>[];
  projWbsActivityEstimate: ProjWbsActivityEstimatesType<T>[];
}
