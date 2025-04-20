/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RAssetLifeHists } from './RAssetLifeHists';
import { RAssetLifeHistsRequestBuilder } from './RAssetLifeHistsRequestBuilder';
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
export class RAssetLifeHistsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RAssetLifeHists<DeSerializersT>, DeSerializersT>
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
  ): RAssetLifeHistsApi<DeSerializersT> {
    return new RAssetLifeHistsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RAssetLifeHists;

  requestBuilder(): RAssetLifeHistsRequestBuilder<DeSerializersT> {
    return new RAssetLifeHistsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RAssetLifeHists<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RAssetLifeHists<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RAssetLifeHists<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RAssetLifeHists, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RAssetLifeHists,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RAssetLifeHists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FA_INVENTORY_NUMBER: OrderableEdmTypeField<
      RAssetLifeHists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE_MODEL: OrderableEdmTypeField<
      RAssetLifeHists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATE: OrderableEdmTypeField<
      RAssetLifeHists<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REASON_COMMENT: OrderableEdmTypeField<
      RAssetLifeHists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEW_LIFETIME: OrderableEdmTypeField<
      RAssetLifeHists<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEPRECIATION_METHOD: OrderableEdmTypeField<
      RAssetLifeHists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEW_FACTOR: OrderableEdmTypeField<
      RAssetLifeHists<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REASON_CODE: OrderableEdmTypeField<
      RAssetLifeHists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RAssetLifeHists<DeSerializers>>;
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
         * Static representation of the {@link faInventoryNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FA_INVENTORY_NUMBER: fieldBuilder.buildEdmTypeField(
          'FAInventoryNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valueModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_MODEL: fieldBuilder.buildEdmTypeField(
          'ValueModel',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link date} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE: fieldBuilder.buildEdmTypeField(
          'Date',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link reasonComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_COMMENT: fieldBuilder.buildEdmTypeField(
          'ReasonComment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link newLifetime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_LIFETIME: fieldBuilder.buildEdmTypeField(
          'NewLifetime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link depreciationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_METHOD: fieldBuilder.buildEdmTypeField(
          'DepreciationMethod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link newFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_FACTOR: fieldBuilder.buildEdmTypeField(
          'NewFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_CODE: fieldBuilder.buildEdmTypeField(
          'ReasonCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RAssetLifeHists)
      };
    }

    return this._schema;
  }
}
