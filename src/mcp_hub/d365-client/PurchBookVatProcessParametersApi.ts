/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchBookVatProcessParameters } from './PurchBookVatProcessParameters';
import { PurchBookVatProcessParametersRequestBuilder } from './PurchBookVatProcessParametersRequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
import { PurchBookProcessingTypeRu } from './PurchBookProcessingTypeRu';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PurchBookVatProcessParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PurchBookVatProcessParameters<DeSerializersT>, DeSerializersT>
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
  ): PurchBookVatProcessParametersApi<DeSerializersT> {
    return new PurchBookVatProcessParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      PurchBookVatProcessParameters<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionSetsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = PurchBookVatProcessParameters;

  requestBuilder(): PurchBookVatProcessParametersRequestBuilder<DeSerializersT> {
    return new PurchBookVatProcessParametersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PurchBookVatProcessParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PurchBookVatProcessParameters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchBookVatProcessParameters<DeSerializersT>,
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
    typeof PurchBookVatProcessParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchBookVatProcessParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PurchBookVatProcessParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VAT_OPERATION_CODE: OrderableEdmTypeField<
      PurchBookVatProcessParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATION_TYPE: EnumField<
      PurchBookVatProcessParameters<DeSerializers>,
      DeSerializersT,
      PurchBookProcessingTypeRu,
      true,
      true
    >;
    INCLUDE_IN_BOOK: EnumField<
      PurchBookVatProcessParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FACTURE_POST_PROCESS_VAT: EnumField<
      PurchBookVatProcessParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_DIMENSION_ENABLED: EnumField<
      PurchBookVatProcessParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PurchBookVatProcessParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEFAULT: EnumField<
      PurchBookVatProcessParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FACTURE_OPERATION_TYPE_CODE: OrderableEdmTypeField<
      PurchBookVatProcessParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      PurchBookVatProcessParameters<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PurchBookVatProcessParameters<DeSerializers>>;
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
         * Static representation of the {@link vatOperationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_OPERATION_CODE: fieldBuilder.buildEdmTypeField(
          'VATOperationCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link operationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_TYPE: fieldBuilder.buildEnumField(
          'OperationType',
          PurchBookProcessingTypeRu,
          true
        ),
        /**
         * Static representation of the {@link includeInBook} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_IN_BOOK: fieldBuilder.buildEnumField(
          'IncludeInBook',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link facturePostProcessVat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACTURE_POST_PROCESS_VAT: fieldBuilder.buildEnumField(
          'FacturePostProcessVAT',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultDimensionEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_ENABLED: fieldBuilder.buildEnumField(
          'DefaultDimensionEnabled',
          NoYes,
          true
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
         * Static representation of the {@link isDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT: fieldBuilder.buildEnumField('IsDefault', NoYes, true),
        /**
         * Static representation of the {@link factureOperationTypeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACTURE_OPERATION_TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'FactureOperationTypeCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PurchBookVatProcessParameters)
      };
    }

    return this._schema;
  }
}
