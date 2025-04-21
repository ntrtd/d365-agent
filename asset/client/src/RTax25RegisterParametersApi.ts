/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RTax25RegisterParameters } from './RTax25RegisterParameters';
import { RTax25RegisterParametersRequestBuilder } from './RTax25RegisterParametersRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RTax25RegisterParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RTax25RegisterParameters<DeSerializersT>, DeSerializersT>
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
  ): RTax25RegisterParametersApi<DeSerializersT> {
    return new RTax25RegisterParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      RTax25RegisterParameters<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RTax25RegisterParameters;

  requestBuilder(): RTax25RegisterParametersRequestBuilder<DeSerializersT> {
    return new RTax25RegisterParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RTax25RegisterParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RTax25RegisterParameters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RTax25RegisterParameters<DeSerializersT>,
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
    typeof RTax25RegisterParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RTax25RegisterParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RTax25RegisterParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REGISTER_CODE: OrderableEdmTypeField<
      RTax25RegisterParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARAMETER_CODE: OrderableEdmTypeField<
      RTax25RegisterParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VALUE: OrderableEdmTypeField<
      RTax25RegisterParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      RTax25RegisterParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARAMETER_NAME: OrderableEdmTypeField<
      RTax25RegisterParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      RTax25RegisterParameters<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RTax25RegisterParameters<DeSerializers>>;
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
         * Static representation of the {@link registerCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTER_CODE: fieldBuilder.buildEdmTypeField(
          'RegisterCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link parameterCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETER_CODE: fieldBuilder.buildEdmTypeField(
          'ParameterCode',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.String', true),
        /**
         * Static representation of the {@link mainAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'MainAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parameterName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARAMETER_NAME: fieldBuilder.buildEdmTypeField(
          'ParameterName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RTax25RegisterParameters)
      };
    }

    return this._schema;
  }
}
