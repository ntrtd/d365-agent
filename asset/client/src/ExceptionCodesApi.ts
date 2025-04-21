/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExceptionCodes } from './ExceptionCodes';
import { ExceptionCodesRequestBuilder } from './ExceptionCodesRequestBuilder';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ExceptionCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExceptionCodes<DeSerializersT>, DeSerializersT>
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
  ): ExceptionCodesApi<DeSerializersT> {
    return new ExceptionCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      ExceptionCodes<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ReleasedProductsV2Api<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RELEASED_PRODUCTS_V_2: new OneToManyLink(
        'ReleasedProductsV2',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ExceptionCodes;

  requestBuilder(): ExceptionCodesRequestBuilder<DeSerializersT> {
    return new ExceptionCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExceptionCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExceptionCodes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ExceptionCodes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ExceptionCodes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ExceptionCodes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ExceptionCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_CLASSIFICATION_CODE: OrderableEdmTypeField<
      ExceptionCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXCEPTION_CODE: OrderableEdmTypeField<
      ExceptionCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ExceptionCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROXIMATE_TAX_RATE_FOR_IMPORTED_PRODUCTS: OrderableEdmTypeField<
      ExceptionCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    APPROXIMATE_TAX_RATE_FOR_NATIONAL_PRODUCTS: OrderableEdmTypeField<
      ExceptionCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      ExceptionCodes<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ExceptionCodes<DeSerializers>>;
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
         * Static representation of the {@link fiscalClassificationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_CLASSIFICATION_CODE: fieldBuilder.buildEdmTypeField(
          'FiscalClassificationCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link exceptionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCEPTION_CODE: fieldBuilder.buildEdmTypeField(
          'ExceptionCode',
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
         * Static representation of the {@link approximateTaxRateForImportedProducts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROXIMATE_TAX_RATE_FOR_IMPORTED_PRODUCTS:
          fieldBuilder.buildEdmTypeField(
            'ApproximateTaxRateForImportedProducts',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link approximateTaxRateForNationalProducts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROXIMATE_TAX_RATE_FOR_NATIONAL_PRODUCTS:
          fieldBuilder.buildEdmTypeField(
            'ApproximateTaxRateForNationalProducts',
            'Edm.Decimal',
            false
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExceptionCodes)
      };
    }

    return this._schema;
  }
}
