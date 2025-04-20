/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WithholdingTaxCodeValues } from './WithholdingTaxCodeValues';
import { WithholdingTaxCodeValuesRequestBuilder } from './WithholdingTaxCodeValuesRequestBuilder';
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
export class WithholdingTaxCodeValuesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WithholdingTaxCodeValues<DeSerializersT>, DeSerializersT>
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
  ): WithholdingTaxCodeValuesApi<DeSerializersT> {
    return new WithholdingTaxCodeValuesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link withholdingTaxCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_TAX_CODE: OneToOneLink<
      WithholdingTaxCodeValues<DeSerializersT>,
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

  entityConstructor = WithholdingTaxCodeValues;

  requestBuilder(): WithholdingTaxCodeValuesRequestBuilder<DeSerializersT> {
    return new WithholdingTaxCodeValuesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WithholdingTaxCodeValues<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WithholdingTaxCodeValues<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WithholdingTaxCodeValues<DeSerializersT>,
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
    typeof WithholdingTaxCodeValues,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WithholdingTaxCodeValues,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WithholdingTaxCodeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_WITHHOLD_CODE_ID: OrderableEdmTypeField<
      WithholdingTaxCodeValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      WithholdingTaxCodeValues<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      WithholdingTaxCodeValues<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALUE: OrderableEdmTypeField<
      WithholdingTaxCodeValues<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAXIMUM_LIMIT: OrderableEdmTypeField<
      WithholdingTaxCodeValues<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MINIMUM_LIMIT: OrderableEdmTypeField<
      WithholdingTaxCodeValues<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCLUDE_PERCENTAGE: OrderableEdmTypeField<
      WithholdingTaxCodeValues<DeSerializers>,
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
      WithholdingTaxCodeValues<DeSerializersT>,
      DeSerializersT,
      WithholdingTaxCodesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WithholdingTaxCodeValues<DeSerializers>>;
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
         * Static representation of the {@link taxWithholdCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_CODE_ID: fieldBuilder.buildEdmTypeField(
          'TaxWithholdCodeId',
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
         * Static representation of the {@link toDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DATE: fieldBuilder.buildEdmTypeField(
          'ToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link maximumLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_LIMIT: fieldBuilder.buildEdmTypeField(
          'MaximumLimit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link minimumLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_LIMIT: fieldBuilder.buildEdmTypeField(
          'MinimumLimit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link excludePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCLUDE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'ExcludePercentage',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WithholdingTaxCodeValues)
      };
    }

    return this._schema;
  }
}
