/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetRetirementObligations } from './AssetRetirementObligations';
import { AssetRetirementObligationsRequestBuilder } from './AssetRetirementObligationsRequestBuilder';
import { AssetRetirementPostingFrequencyJp } from './AssetRetirementPostingFrequencyJp';
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
export class AssetRetirementObligationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AssetRetirementObligations<DeSerializersT>, DeSerializersT>
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
  ): AssetRetirementObligationsApi<DeSerializersT> {
    return new AssetRetirementObligationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetRetirementObligations;

  requestBuilder(): AssetRetirementObligationsRequestBuilder<DeSerializersT> {
    return new AssetRetirementObligationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetRetirementObligations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetRetirementObligations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetRetirementObligations<DeSerializersT>,
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
    typeof AssetRetirementObligations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetRetirementObligations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetRetirementObligations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ASSET_NUMBER: OrderableEdmTypeField<
      AssetRetirementObligations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BOOK: OrderableEdmTypeField<
      AssetRetirementObligations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOCUMENT_ID: OrderableEdmTypeField<
      AssetRetirementObligations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AssetRetirementObligations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_DATE: OrderableEdmTypeField<
      AssetRetirementObligations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SERVICE_LIFE: OrderableEdmTypeField<
      AssetRetirementObligations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSTING_FREQUENCY: EnumField<
      AssetRetirementObligations<DeSerializers>,
      DeSerializersT,
      AssetRetirementPostingFrequencyJp,
      true,
      true
    >;
    ALL_FIELDS: AllFields<AssetRetirementObligations<DeSerializers>>;
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
         * Static representation of the {@link assetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_NUMBER: fieldBuilder.buildEdmTypeField(
          'AssetNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link book} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOOK: fieldBuilder.buildEdmTypeField('Book', 'Edm.String', false),
        /**
         * Static representation of the {@link documentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_ID: fieldBuilder.buildEdmTypeField(
          'DocumentId',
          'Edm.String',
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
         * Static representation of the {@link documentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'DocumentDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link serviceLife} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_LIFE: fieldBuilder.buildEdmTypeField(
          'ServiceLife',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link postingFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_FREQUENCY: fieldBuilder.buildEnumField(
          'PostingFrequency',
          AssetRetirementPostingFrequencyJp,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetRetirementObligations)
      };
    }

    return this._schema;
  }
}
