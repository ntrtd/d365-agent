/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjValEmplCategorySetupEntity_DataEntities } from './ProjValEmplCategorySetupEntity_DataEntities';
import { ProjValEmplCategorySetupEntity_DataEntitiesRequestBuilder } from './ProjValEmplCategorySetupEntity_DataEntitiesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class ProjValEmplCategorySetupEntity_DataEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ProjValEmplCategorySetupEntity_DataEntities<DeSerializersT>,
      DeSerializersT
    >
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
  ): ProjValEmplCategorySetupEntity_DataEntitiesApi<DeSerializersT> {
    return new ProjValEmplCategorySetupEntity_DataEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjValEmplCategorySetupEntity_DataEntities;

  requestBuilder(): ProjValEmplCategorySetupEntity_DataEntitiesRequestBuilder<DeSerializersT> {
    return new ProjValEmplCategorySetupEntity_DataEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProjValEmplCategorySetupEntity_DataEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjValEmplCategorySetupEntity_DataEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjValEmplCategorySetupEntity_DataEntities<DeSerializersT>,
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
    typeof ProjValEmplCategorySetupEntity_DataEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjValEmplCategorySetupEntity_DataEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjValEmplCategorySetupEntity_DataEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_ID: OrderableEdmTypeField<
      ProjValEmplCategorySetupEntity_DataEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATEGORY_ID: OrderableEdmTypeField<
      ProjValEmplCategorySetupEntity_DataEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RESOURCE_ID: OrderableEdmTypeField<
      ProjValEmplCategorySetupEntity_DataEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RESOURCE: OrderableEdmTypeField<
      ProjValEmplCategorySetupEntity_DataEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RESOURCE_LEGAL_ENTITY_PARTY_NUMBER: OrderableEdmTypeField<
      ProjValEmplCategorySetupEntity_DataEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESOURCE_LEGAL_ENTITY_DATA_AREA: OrderableEdmTypeField<
      ProjValEmplCategorySetupEntity_DataEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      ProjValEmplCategorySetupEntity_DataEntities<DeSerializers>
    >;
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
         * Static representation of the {@link groupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_ID: fieldBuilder.buildEdmTypeField(
          'GroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link categoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'CategoryId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link resourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_ID: fieldBuilder.buildEdmTypeField(
          'ResourceId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link resource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE: fieldBuilder.buildEdmTypeField(
          'Resource',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link resourceLegalEntityPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_LEGAL_ENTITY_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ResourceLegalEntityPartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link resourceLegalEntityDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_LEGAL_ENTITY_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'ResourceLegalEntityDataArea',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          ProjValEmplCategorySetupEntity_DataEntities
        )
      };
    }

    return this._schema;
  }
}
