/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WithholdingPeriods } from './WithholdingPeriods';
import { WithholdingPeriodsRequestBuilder } from './WithholdingPeriodsRequestBuilder';
import { WithholdingTaxCodesApi } from './WithholdingTaxCodesApi';
import { PeriodUnit } from './PeriodUnit';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class WithholdingPeriodsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WithholdingPeriods<DeSerializersT>, DeSerializersT>
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
  ): WithholdingPeriodsApi<DeSerializersT> {
    return new WithholdingPeriodsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link withholdingTaxCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_TAX_CODE: OneToManyLink<
      WithholdingPeriods<DeSerializersT>,
      DeSerializersT,
      WithholdingTaxCodesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [WithholdingTaxCodesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      WITHHOLDING_TAX_CODE: new OneToManyLink(
        'WithholdingTaxCode',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = WithholdingPeriods;

  requestBuilder(): WithholdingPeriodsRequestBuilder<DeSerializersT> {
    return new WithholdingPeriodsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WithholdingPeriods<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WithholdingPeriods<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WithholdingPeriods<DeSerializersT>,
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
    typeof WithholdingPeriods,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WithholdingPeriods,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WithholdingPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_WITHHOLD_PERIOD: OrderableEdmTypeField<
      WithholdingPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_WITHHOLD_FROM_DATE: OrderableEdmTypeField<
      WithholdingPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_WITHHOLD_TO_DATE: OrderableEdmTypeField<
      WithholdingPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_AUTHORITY: OrderableEdmTypeField<
      WithholdingPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      WithholdingPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_CODE: OrderableEdmTypeField<
      WithholdingPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_UNIT: EnumField<
      WithholdingPeriods<DeSerializers>,
      DeSerializersT,
      PeriodUnit,
      true,
      true
    >;
    QTY_UNIT: OrderableEdmTypeField<
      WithholdingPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link withholdingTaxCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_TAX_CODE: OneToManyLink<
      WithholdingPeriods<DeSerializersT>,
      DeSerializersT,
      WithholdingTaxCodesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WithholdingPeriods<DeSerializers>>;
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
         * Static representation of the {@link taxWithholdPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_PERIOD: fieldBuilder.buildEdmTypeField(
          'TaxWithholdPeriod',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taxWithholdFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'TaxWithholdFromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taxWithholdToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_WITHHOLD_TO_DATE: fieldBuilder.buildEdmTypeField(
          'TaxWithholdToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taxAuthority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AUTHORITY: fieldBuilder.buildEdmTypeField(
          'TaxAuthority',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link paymentCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_CODE: fieldBuilder.buildEdmTypeField(
          'PaymentCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link periodUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_UNIT: fieldBuilder.buildEnumField(
          'PeriodUnit',
          PeriodUnit,
          true
        ),
        /**
         * Static representation of the {@link qtyUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY_UNIT: fieldBuilder.buildEdmTypeField('QtyUnit', 'Edm.Int32', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WithholdingPeriods)
      };
    }

    return this._schema;
  }
}
