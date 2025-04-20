/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FixedAssetValueModelSetupDerivedValueModels } from './FixedAssetValueModelSetupDerivedValueModels';
import { FixedAssetValueModelSetupDerivedValueModelsRequestBuilder } from './FixedAssetValueModelSetupDerivedValueModelsRequestBuilder';
import { ValueModelSetupsApi } from './ValueModelSetupsApi';
import { AssetTransType } from './AssetTransType';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class FixedAssetValueModelSetupDerivedValueModelsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      FixedAssetValueModelSetupDerivedValueModels<DeSerializersT>,
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
  ): FixedAssetValueModelSetupDerivedValueModelsApi<DeSerializersT> {
    return new FixedAssetValueModelSetupDerivedValueModelsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link valueModelSetupDerivedValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALUE_MODEL_SETUP_DERIVED_VALUE_MODEL: OneToOneLink<
      FixedAssetValueModelSetupDerivedValueModels<DeSerializersT>,
      DeSerializersT,
      ValueModelSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link valueModelSetupValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALUE_MODEL_SETUP_VALUE_MODEL: OneToOneLink<
      FixedAssetValueModelSetupDerivedValueModels<DeSerializersT>,
      DeSerializersT,
      ValueModelSetupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ValueModelSetupsApi<DeSerializersT>,
      ValueModelSetupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      VALUE_MODEL_SETUP_DERIVED_VALUE_MODEL: new OneToOneLink(
        'ValueModelSetupDerivedValueModel',
        this,
        linkedApis[0]
      ),
      VALUE_MODEL_SETUP_VALUE_MODEL: new OneToOneLink(
        'ValueModelSetupValueModel',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = FixedAssetValueModelSetupDerivedValueModels;

  requestBuilder(): FixedAssetValueModelSetupDerivedValueModelsRequestBuilder<DeSerializersT> {
    return new FixedAssetValueModelSetupDerivedValueModelsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FixedAssetValueModelSetupDerivedValueModels<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FixedAssetValueModelSetupDerivedValueModels<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FixedAssetValueModelSetupDerivedValueModels<DeSerializersT>,
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
    typeof FixedAssetValueModelSetupDerivedValueModels,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FixedAssetValueModelSetupDerivedValueModels,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FixedAssetValueModelSetupDerivedValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE_MODEL_ID: OrderableEdmTypeField<
      FixedAssetValueModelSetupDerivedValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DERIVED_VALUE_MODEL_ID: OrderableEdmTypeField<
      FixedAssetValueModelSetupDerivedValueModels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      FixedAssetValueModelSetupDerivedValueModels<DeSerializers>,
      DeSerializersT,
      AssetTransType,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link valueModelSetupDerivedValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALUE_MODEL_SETUP_DERIVED_VALUE_MODEL: OneToOneLink<
      FixedAssetValueModelSetupDerivedValueModels<DeSerializersT>,
      DeSerializersT,
      ValueModelSetupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link valueModelSetupValueModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALUE_MODEL_SETUP_VALUE_MODEL: OneToOneLink<
      FixedAssetValueModelSetupDerivedValueModels<DeSerializersT>,
      DeSerializersT,
      ValueModelSetupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      FixedAssetValueModelSetupDerivedValueModels<DeSerializers>
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
         * Static representation of the {@link valueModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'ValueModelId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link derivedValueModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DERIVED_VALUE_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'DerivedValueModelId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'TransactionType',
          AssetTransType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          FixedAssetValueModelSetupDerivedValueModels
        )
      };
    }

    return this._schema;
  }
}
