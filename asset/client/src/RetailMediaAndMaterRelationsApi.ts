/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailMediaAndMaterRelations } from './RetailMediaAndMaterRelations';
import { RetailMediaAndMaterRelationsRequestBuilder } from './RetailMediaAndMaterRelationsRequestBuilder';
import { RetailMediaMasterEntity } from './RetailMediaMasterEntity';
import { NoYes } from './NoYes';
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
export class RetailMediaAndMaterRelationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailMediaAndMaterRelations<DeSerializersT>, DeSerializersT>
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
  ): RetailMediaAndMaterRelationsApi<DeSerializersT> {
    return new RetailMediaAndMaterRelationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailMediaAndMaterRelations;

  requestBuilder(): RetailMediaAndMaterRelationsRequestBuilder<DeSerializersT> {
    return new RetailMediaAndMaterRelationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailMediaAndMaterRelations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailMediaAndMaterRelations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailMediaAndMaterRelations<DeSerializersT>,
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
    typeof RetailMediaAndMaterRelations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailMediaAndMaterRelations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RESOURCE_ID: OrderableEdmTypeField<
      RetailMediaAndMaterRelations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DISPLAY_ORDER: OrderableEdmTypeField<
      RetailMediaAndMaterRelations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MASTER_TYPE: EnumField<
      RetailMediaAndMaterRelations<DeSerializers>,
      DeSerializersT,
      RetailMediaMasterEntity,
      true,
      true
    >;
    IS_ADDITIONAL_MEDIA: EnumField<
      RetailMediaAndMaterRelations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      RetailMediaAndMaterRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEFAULT_IMAGE: EnumField<
      RetailMediaAndMaterRelations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailMediaAndMaterRelations<DeSerializers>>;
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
         * Static representation of the {@link displayOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_ORDER: fieldBuilder.buildEdmTypeField(
          'DisplayOrder',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link masterType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MASTER_TYPE: fieldBuilder.buildEnumField(
          'MasterType',
          RetailMediaMasterEntity,
          true
        ),
        /**
         * Static representation of the {@link isAdditionalMedia} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ADDITIONAL_MEDIA: fieldBuilder.buildEnumField(
          'IsAdditionalMedia',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDefaultImage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_IMAGE: fieldBuilder.buildEnumField(
          'IsDefaultImage',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailMediaAndMaterRelations)
      };
    }

    return this._schema;
  }
}
