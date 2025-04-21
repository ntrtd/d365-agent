/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WithholdConcessions } from './WithholdConcessions';
import { WithholdConcessionsRequestBuilder } from './WithholdConcessionsRequestBuilder';
import { TaxWithholdTypeIn } from './TaxWithholdTypeIn';
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
export class WithholdConcessionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WithholdConcessions<DeSerializersT>, DeSerializersT>
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
  ): WithholdConcessionsApi<DeSerializersT> {
    return new WithholdConcessionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WithholdConcessions;

  requestBuilder(): WithholdConcessionsRequestBuilder<DeSerializersT> {
    return new WithholdConcessionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WithholdConcessions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WithholdConcessions<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WithholdConcessions<DeSerializersT>,
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
    typeof WithholdConcessions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WithholdConcessions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LINE_ID: OrderableEdmTypeField<
      WithholdConcessions<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    HEADER_ID: OrderableEdmTypeField<
      WithholdConcessions<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    VEND_ACCOUNT: OrderableEdmTypeField<
      WithholdConcessions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      WithholdConcessions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CERTIFICATE_TO_DATE: OrderableEdmTypeField<
      WithholdConcessions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REMARK: OrderableEdmTypeField<
      WithholdConcessions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_TYPE: EnumField<
      WithholdConcessions<DeSerializers>,
      DeSerializersT,
      TaxWithholdTypeIn,
      true,
      true
    >;
    CERTIFICATE_FROM_DATE: OrderableEdmTypeField<
      WithholdConcessions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WITHHOLDING_TAX_CODE: OrderableEdmTypeField<
      WithholdConcessions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_ACCOUNT: OrderableEdmTypeField<
      WithholdConcessions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECTION_CODE: OrderableEdmTypeField<
      WithholdConcessions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CERTIFICATE: OrderableEdmTypeField<
      WithholdConcessions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      WithholdConcessions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<WithholdConcessions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link lineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_ID: fieldBuilder.buildEdmTypeField('LineID', 'Edm.Guid', false),
        /**
         * Static representation of the {@link headerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_ID: fieldBuilder.buildEdmTypeField(
          'HeaderId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link vendAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendAccount',
          'Edm.String',
          true
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
         * Static representation of the {@link certificateToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFICATE_TO_DATE: fieldBuilder.buildEdmTypeField(
          'CertificateToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link remark} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMARK: fieldBuilder.buildEdmTypeField('Remark', 'Edm.String', true),
        /**
         * Static representation of the {@link taxType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TYPE: fieldBuilder.buildEnumField(
          'TaxType',
          TaxWithholdTypeIn,
          true
        ),
        /**
         * Static representation of the {@link certificateFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFICATE_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'CertificateFromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link withholdingTaxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_CODE: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sectionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECTION_CODE: fieldBuilder.buildEdmTypeField(
          'SectionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link certificate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFICATE: fieldBuilder.buildEdmTypeField(
          'Certificate',
          'Edm.String',
          true
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WithholdConcessions)
      };
    }

    return this._schema;
  }
}
