/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ChargesTolerances } from './ChargesTolerances';
import { ChargesTolerancesRequestBuilder } from './ChargesTolerancesRequestBuilder';
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
export class ChargesTolerancesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ChargesTolerances<DeSerializersT>, DeSerializersT>
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
  ): ChargesTolerancesApi<DeSerializersT> {
    return new ChargesTolerancesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ChargesTolerances;

  requestBuilder(): ChargesTolerancesRequestBuilder<DeSerializersT> {
    return new ChargesTolerancesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ChargesTolerances<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ChargesTolerances<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ChargesTolerances<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ChargesTolerances,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ChargesTolerances,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ChargesTolerances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARGES_CODE: OrderableEdmTypeField<
      ChargesTolerances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTRASTAT_STATISTICAL_VALUE: EnumField<
      ChargesTolerances<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_LETTEROF_CREDIT_ENABLED: EnumField<
      ChargesTolerances<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTRASTAT_INVOICE_VALUE: EnumField<
      ChargesTolerances<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ChargesTolerances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGES_TOLERANCE_PERCENTAGE: OrderableEdmTypeField<
      ChargesTolerances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ChargesTolerances<DeSerializers>>;
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
         * Static representation of the {@link chargesCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGES_CODE: fieldBuilder.buildEdmTypeField(
          'ChargesCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link intrastatStatisticalValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_STATISTICAL_VALUE: fieldBuilder.buildEnumField(
          'IntrastatStatisticalValue',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isLetterofCreditEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_LETTEROF_CREDIT_ENABLED: fieldBuilder.buildEnumField(
          'IsLetterofCreditEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link intrastatInvoiceValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRASTAT_INVOICE_VALUE: fieldBuilder.buildEnumField(
          'IntrastatInvoiceValue',
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
         * Static representation of the {@link chargesTolerancePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGES_TOLERANCE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'ChargesTolerancePercentage',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ChargesTolerances)
      };
    }

    return this._schema;
  }
}
