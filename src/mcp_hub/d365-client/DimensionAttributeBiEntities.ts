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
import type { DimensionAttributeBiEntitiesApi } from './DimensionAttributeBiEntitiesApi';
import { DimensionAttributeType } from './DimensionAttributeType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "DimensionAttributeBiEntities" of service "d365_metadata".
 */
export class DimensionAttributeBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimensionAttributeBiEntitiesType<T>
{
  /**
   * Technical entity name for DimensionAttributeBiEntities.
   */
  static override _entityName = 'DimensionAttributeBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimensionAttributeBiEntities entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Translation View System Language Id Field Name.
   * @nullable
   */
  declare translationViewSystemLanguageIdFieldName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Translation View Language Id Field Id.
   */
  declare translationViewLanguageIdFieldId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Translation View System Language Id Field Id.
   */
  declare translationViewSystemLanguageIdFieldId: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Translation View Translated Name Field Name.
   * @nullable
   */
  declare translationViewTranslatedNameFieldName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: DimensionAttributeType | null;
  /**
   * Translation View Translated Name Field Id.
   */
  declare translationViewTranslatedNameFieldId: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Backing Entity Value Field Id.
   */
  declare backingEntityValueFieldId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Translation Table Name.
   * @nullable
   */
  declare translationTableName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Translation View Language Id Field Name.
   * @nullable
   */
  declare translationViewLanguageIdFieldName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Hash Key.
   */
  declare hashKey: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Key Attribute.
   */
  declare keyAttribute: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Backing Entity Table Id.
   */
  declare backingEntityTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Translation View Key Field Name.
   * @nullable
   */
  declare translationViewKeyFieldName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Translation Key Field Name.
   * @nullable
   */
  declare translationKeyFieldName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Give Derived Dimensions Precedence.
   * @nullable
   */
  declare giveDerivedDimensionsPrecedence?: NoYes | null;
  /**
   * Translation Name Field Name.
   * @nullable
   */
  declare translationNameFieldName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Value Column Name.
   * @nullable
   */
  declare dimensionValueColumnName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Translation View Name.
   * @nullable
   */
  declare translationViewName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Balancing Psn.
   * @nullable
   */
  declare isBalancingPsn?: NoYes | null;
  /**
   * Translation Key Field Id.
   */
  declare translationKeyFieldId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * View Name.
   * @nullable
   */
  declare viewName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Translation Name Field Id.
   */
  declare translationNameFieldId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Use Translation Name Method.
   * @nullable
   */
  declare useTranslationNameMethod?: NoYes | null;
  /**
   * Report Column Name.
   * @nullable
   */
  declare reportColumnName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Translation Language Id Field Id.
   */
  declare translationLanguageIdFieldId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name Attribute.
   */
  declare nameAttribute: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Translation View Key Field Id.
   */
  declare translationViewKeyFieldId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Dimension Key Column Name.
   * @nullable
   */
  declare dimensionKeyColumnName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Backing Entity Table Name.
   * @nullable
   */
  declare backingEntityTableName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Backing Entity Type.
   */
  declare backingEntityType: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Backing Entity Key Field Id.
   */
  declare backingEntityKeyFieldId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Backing Entity Value Field Name.
   * @nullable
   */
  declare backingEntityValueFieldName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Translation View Name Field Id.
   */
  declare translationViewNameFieldId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Translation View Id.
   */
  declare translationViewId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Translation View Value Field Id.
   */
  declare translationViewValueFieldId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Balancing Dimension Psn.
   */
  declare balancingDimensionPsn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Translation View Value Field Name.
   * @nullable
   */
  declare translationViewValueFieldName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Translation Language Id Field Name.
   * @nullable
   */
  declare translationLanguageIdFieldName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Value Attribute.
   */
  declare valueAttribute: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Translation Table Id.
   */
  declare translationTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Copy Values On Create.
   * @nullable
   */
  declare copyValuesOnCreate?: NoYes | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Translation View Name Field Name.
   * @nullable
   */
  declare translationViewNameFieldName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Backing Entity Key Field Name.
   * @nullable
   */
  declare backingEntityKeyFieldName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DimensionAttributeBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface DimensionAttributeBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  translationViewSystemLanguageIdFieldName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  translationViewLanguageIdFieldId: DeserializedType<T, 'Edm.Int32'>;
  translationViewSystemLanguageIdFieldId: DeserializedType<T, 'Edm.Int32'>;
  translationViewTranslatedNameFieldName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  type?: DimensionAttributeType | null;
  translationViewTranslatedNameFieldId: DeserializedType<T, 'Edm.Int32'>;
  backingEntityValueFieldId: DeserializedType<T, 'Edm.Int32'>;
  translationTableName?: DeserializedType<T, 'Edm.String'> | null;
  translationViewLanguageIdFieldName?: DeserializedType<T, 'Edm.String'> | null;
  hashKey: DeserializedType<T, 'Edm.Guid'>;
  keyAttribute: DeserializedType<T, 'Edm.Int32'>;
  backingEntityTableId: DeserializedType<T, 'Edm.Int32'>;
  translationViewKeyFieldName?: DeserializedType<T, 'Edm.String'> | null;
  translationKeyFieldName?: DeserializedType<T, 'Edm.String'> | null;
  giveDerivedDimensionsPrecedence?: NoYes | null;
  translationNameFieldName?: DeserializedType<T, 'Edm.String'> | null;
  dimensionValueColumnName?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  translationViewName?: DeserializedType<T, 'Edm.String'> | null;
  isBalancingPsn?: NoYes | null;
  translationKeyFieldId: DeserializedType<T, 'Edm.Int32'>;
  viewName?: DeserializedType<T, 'Edm.String'> | null;
  translationNameFieldId: DeserializedType<T, 'Edm.Int32'>;
  useTranslationNameMethod?: NoYes | null;
  reportColumnName?: DeserializedType<T, 'Edm.String'> | null;
  translationLanguageIdFieldId: DeserializedType<T, 'Edm.Int32'>;
  nameAttribute: DeserializedType<T, 'Edm.Int32'>;
  translationViewKeyFieldId: DeserializedType<T, 'Edm.Int32'>;
  dimensionKeyColumnName?: DeserializedType<T, 'Edm.String'> | null;
  backingEntityTableName?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  backingEntityType: DeserializedType<T, 'Edm.Int32'>;
  backingEntityKeyFieldId: DeserializedType<T, 'Edm.Int32'>;
  backingEntityValueFieldName?: DeserializedType<T, 'Edm.String'> | null;
  translationViewNameFieldId: DeserializedType<T, 'Edm.Int32'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  translationViewId: DeserializedType<T, 'Edm.Int32'>;
  translationViewValueFieldId: DeserializedType<T, 'Edm.Int32'>;
  balancingDimensionPsn: DeserializedType<T, 'Edm.Int64'>;
  translationViewValueFieldName?: DeserializedType<T, 'Edm.String'> | null;
  translationLanguageIdFieldName?: DeserializedType<T, 'Edm.String'> | null;
  valueAttribute: DeserializedType<T, 'Edm.Int32'>;
  translationTableId: DeserializedType<T, 'Edm.Int32'>;
  copyValuesOnCreate?: NoYes | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  translationViewNameFieldName?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  backingEntityKeyFieldName?: DeserializedType<T, 'Edm.String'> | null;
}
