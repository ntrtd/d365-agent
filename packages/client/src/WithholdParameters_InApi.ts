/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WithholdParameters_In } from './WithholdParameters_In';
import { WithholdParameters_InRequestBuilder } from './WithholdParameters_InRequestBuilder';
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
export class WithholdParameters_InApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WithholdParameters_In<DeSerializersT>, DeSerializersT>
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
  ): WithholdParameters_InApi<DeSerializersT> {
    return new WithholdParameters_InApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WithholdParameters_In;

  requestBuilder(): WithholdParameters_InRequestBuilder<DeSerializersT> {
    return new WithholdParameters_InRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WithholdParameters_In<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WithholdParameters_In<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WithholdParameters_In<DeSerializersT>,
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
    typeof WithholdParameters_In,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WithholdParameters_In,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WithholdParameters_In<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TCS_PAYMENT: EnumField<
      WithholdParameters_In<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TCS_INVOICE: EnumField<
      WithholdParameters_In<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLE_WARNING_MSG: EnumField<
      WithholdParameters_In<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TCS_ACTIVATE: EnumField<
      WithholdParameters_In<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CROSS_COMPANY_PAYMENT: EnumField<
      WithholdParameters_In<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TDS_PAYMENT: EnumField<
      WithholdParameters_In<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TDS_ACTIVATE: EnumField<
      WithholdParameters_In<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TDS_INVOICE: EnumField<
      WithholdParameters_In<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<WithholdParameters_In<DeSerializers>>;
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
         * Static representation of the {@link tcsPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TCS_PAYMENT: fieldBuilder.buildEnumField('TCSPayment', NoYes, true),
        /**
         * Static representation of the {@link tcsInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TCS_INVOICE: fieldBuilder.buildEnumField('TCSInvoice', NoYes, true),
        /**
         * Static representation of the {@link enableWarningMsg} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_WARNING_MSG: fieldBuilder.buildEnumField(
          'EnableWarningMsg',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link tcsActivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TCS_ACTIVATE: fieldBuilder.buildEnumField('TCSActivate', NoYes, true),
        /**
         * Static representation of the {@link crossCompanyPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CROSS_COMPANY_PAYMENT: fieldBuilder.buildEnumField(
          'CrossCompanyPayment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link tdsPayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TDS_PAYMENT: fieldBuilder.buildEnumField('TDSPayment', NoYes, true),
        /**
         * Static representation of the {@link tdsActivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TDS_ACTIVATE: fieldBuilder.buildEnumField('TDSActivate', NoYes, true),
        /**
         * Static representation of the {@link tdsInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TDS_INVOICE: fieldBuilder.buildEnumField('TDSInvoice', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WithholdParameters_In)
      };
    }

    return this._schema;
  }
}
