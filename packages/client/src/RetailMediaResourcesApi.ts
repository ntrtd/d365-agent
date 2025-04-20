/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailMediaResources } from './RetailMediaResources';
import { RetailMediaResourcesRequestBuilder } from './RetailMediaResourcesRequestBuilder';
import { NoYes } from './NoYes';
import { RetailMediaType } from './RetailMediaType';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class RetailMediaResourcesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailMediaResources<DeSerializersT>, DeSerializersT>
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
  ): RetailMediaResourcesApi<DeSerializersT> {
    return new RetailMediaResourcesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailMediaResources;

  requestBuilder(): RetailMediaResourcesRequestBuilder<DeSerializersT> {
    return new RetailMediaResourcesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailMediaResources<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailMediaResources<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailMediaResources<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof RetailMediaResources,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailMediaResources,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RESOURCE_ID: OrderableEdmTypeField<
      RetailMediaResources<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SMALL_IMAGE_SHARED_STORAGE_ID: OrderableEdmTypeField<
      RetailMediaResources<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailMediaResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_CUSTOMER: EnumField<
      RetailMediaResources<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FILE_NAME: OrderableEdmTypeField<
      RetailMediaResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_POS: EnumField<
      RetailMediaResources<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_SECURED_RESOURCE: EnumField<
      RetailMediaResources<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SIZE_IN_KILOBYTES: OrderableEdmTypeField<
      RetailMediaResources<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    HEIGHT: OrderableEdmTypeField<
      RetailMediaResources<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SHARED_STORAGE_ID: OrderableEdmTypeField<
      RetailMediaResources<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    IS_WORKER: EnumField<
      RetailMediaResources<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_EXTERNALLY_HOSTED: EnumField<
      RetailMediaResources<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PARTIAL_URL: EnumField<
      RetailMediaResources<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INSTANCE_RELATION_TYPE: OrderableEdmTypeField<
      RetailMediaResources<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    WIDTH: OrderableEdmTypeField<
      RetailMediaResources<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_CATEGORY: EnumField<
      RetailMediaResources<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_CATALOG: EnumField<
      RetailMediaResources<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MEDIA_TYPE: EnumField<
      RetailMediaResources<DeSerializers>,
      DeSerializersT,
      RetailMediaType,
      true,
      true
    >;
    THUMBNAIL_SHARED_STORAGE_ID: OrderableEdmTypeField<
      RetailMediaResources<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    IN_USE: EnumField<
      RetailMediaResources<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SMALL_IMAGE_URL: OrderableEdmTypeField<
      RetailMediaResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESOURCE_URL: OrderableEdmTypeField<
      RetailMediaResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THUMBNAIL_URL: OrderableEdmTypeField<
      RetailMediaResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRODUCT: EnumField<
      RetailMediaResources<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXTERNAL_RESOURCE_ID: OrderableEdmTypeField<
      RetailMediaResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailMediaResources<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link resourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_ID: fieldBuilder.buildEdmTypeField(
          'ResourceId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link smallImageSharedStorageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SMALL_IMAGE_SHARED_STORAGE_ID: fieldBuilder.buildEdmTypeField(
          'SmallImageSharedStorageId',
          'Edm.Guid',
          false
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
         * Static representation of the {@link isCustomer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CUSTOMER: fieldBuilder.buildEnumField('IsCustomer', NoYes, true),
        /**
         * Static representation of the {@link fileName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_NAME: fieldBuilder.buildEdmTypeField(
          'FileName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPos} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_POS: fieldBuilder.buildEnumField('IsPos', NoYes, true),
        /**
         * Static representation of the {@link isSecuredResource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SECURED_RESOURCE: fieldBuilder.buildEnumField(
          'IsSecuredResource',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sizeInKilobytes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIZE_IN_KILOBYTES: fieldBuilder.buildEdmTypeField(
          'SizeInKilobytes',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link height} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEIGHT: fieldBuilder.buildEdmTypeField('Height', 'Edm.Int32', false),
        /**
         * Static representation of the {@link sharedStorageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHARED_STORAGE_ID: fieldBuilder.buildEdmTypeField(
          'SharedStorageId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link isWorker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WORKER: fieldBuilder.buildEnumField('IsWorker', NoYes, true),
        /**
         * Static representation of the {@link isExternallyHosted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_EXTERNALLY_HOSTED: fieldBuilder.buildEnumField(
          'IsExternallyHosted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isPartialUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PARTIAL_URL: fieldBuilder.buildEnumField(
          'isPartialUrl',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link instanceRelationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTANCE_RELATION_TYPE: fieldBuilder.buildEdmTypeField(
          'InstanceRelationType',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link width} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIDTH: fieldBuilder.buildEdmTypeField('Width', 'Edm.Int32', false),
        /**
         * Static representation of the {@link isCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CATEGORY: fieldBuilder.buildEnumField('IsCategory', NoYes, true),
        /**
         * Static representation of the {@link isCatalog} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CATALOG: fieldBuilder.buildEnumField('IsCatalog', NoYes, true),
        /**
         * Static representation of the {@link mediaType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEDIA_TYPE: fieldBuilder.buildEnumField(
          'MediaType',
          RetailMediaType,
          true
        ),
        /**
         * Static representation of the {@link thumbnailSharedStorageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THUMBNAIL_SHARED_STORAGE_ID: fieldBuilder.buildEdmTypeField(
          'ThumbnailSharedStorageId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link inUse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_USE: fieldBuilder.buildEnumField('InUse', NoYes, true),
        /**
         * Static representation of the {@link smallImageUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SMALL_IMAGE_URL: fieldBuilder.buildEdmTypeField(
          'SmallImageUrl',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link resourceUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_URL: fieldBuilder.buildEdmTypeField(
          'ResourceUrl',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link thumbnailUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THUMBNAIL_URL: fieldBuilder.buildEdmTypeField(
          'ThumbnailUrl',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRODUCT: fieldBuilder.buildEnumField('IsProduct', NoYes, true),
        /**
         * Static representation of the {@link externalResourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_RESOURCE_ID: fieldBuilder.buildEdmTypeField(
          'ExternalResourceId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailMediaResources)
      };
    }

    return this._schema;
  }
}
