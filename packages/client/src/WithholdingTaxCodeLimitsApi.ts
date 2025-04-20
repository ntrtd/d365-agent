/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WithholdingTaxCodeLimits } from './WithholdingTaxCodeLimits';
import { WithholdingTaxCodeLimitsRequestBuilder } from './WithholdingTaxCodeLimitsRequestBuilder';
import { WithholdingTaxCodesApi } from './WithholdingTaxCodesApi';
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
export class WithholdingTaxCodeLimitsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WithholdingTaxCodeLimits<DeSerializersT>, DeSerializersT>
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
  ): WithholdingTaxCodeLimitsApi<DeSerializersT> {
    return new WithholdingTaxCodeLimitsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link withholdingTaxCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_TAX_CODE: OneToOneLink<
      WithholdingTaxCodeLimits<DeSerializersT>,
      DeSerializersT,
      WithholdingTaxCodesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [WithholdingTaxCodesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      WITHHOLDING_TAX_CODE: new OneToOneLink(
        'WithholdingTaxCode',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = WithholdingTaxCodeLimits;

  requestBuilder(): WithholdingTaxCodeLimitsRequestBuilder<DeSerializersT> {
    return new WithholdingTaxCodeLimitsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WithholdingTaxCodeLimits<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WithholdingTaxCodeLimits<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WithholdingTaxCodeLimits<DeSerializersT>,
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
    typeof WithholdingTaxCodeLimits,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WithholdingTaxCodeLimits,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WithholdingTaxCodeLimits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WITHHOLDING_TAX_CODE_ID: OrderableEdmTypeField<
      WithholdingTaxCodeLimits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      WithholdingTaxCodeLimits<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MINIMUM_WITHHOLDING_TAX: OrderableEdmTypeField<
      WithholdingTaxCodeLimits<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      WithholdingTaxCodeLimits<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MAXIMUM_WITHHOLDING_TAX: OrderableEdmTypeField<
      WithholdingTaxCodeLimits<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link withholdingTaxCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_TAX_CODE: OneToOneLink<
      WithholdingTaxCodeLimits<DeSerializersT>,
      DeSerializersT,
      WithholdingTaxCodesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WithholdingTaxCodeLimits<DeSerializers>>;
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
         * Static representation of the {@link withholdingTaxCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_CODE_ID: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxCodeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE: fieldBuilder.buildEdmTypeField(
          'FromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link minimumWithholdingTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_WITHHOLDING_TAX: fieldBuilder.buildEdmTypeField(
          'MinimumWithholdingTax',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link toDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DATE: fieldBuilder.buildEdmTypeField(
          'ToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link maximumWithholdingTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_WITHHOLDING_TAX: fieldBuilder.buildEdmTypeField(
          'MaximumWithholdingTax',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WithholdingTaxCodeLimits)
      };
    }

    return this._schema;
  }
}
