/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WithholdingTaxRegistrationNumbers } from './WithholdingTaxRegistrationNumbers';
import { WithholdingTaxRegistrationNumbersRequestBuilder } from './WithholdingTaxRegistrationNumbersRequestBuilder';
import { TaxRegistrationTypeIn } from './TaxRegistrationTypeIn';
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
export class WithholdingTaxRegistrationNumbersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<WithholdingTaxRegistrationNumbers<DeSerializersT>, DeSerializersT>
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
  ): WithholdingTaxRegistrationNumbersApi<DeSerializersT> {
    return new WithholdingTaxRegistrationNumbersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WithholdingTaxRegistrationNumbers;

  requestBuilder(): WithholdingTaxRegistrationNumbersRequestBuilder<DeSerializersT> {
    return new WithholdingTaxRegistrationNumbersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    WithholdingTaxRegistrationNumbers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WithholdingTaxRegistrationNumbers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WithholdingTaxRegistrationNumbers<DeSerializersT>,
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
    typeof WithholdingTaxRegistrationNumbers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WithholdingTaxRegistrationNumbers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    REGISTRATION_NUMBER: OrderableEdmTypeField<
      WithholdingTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REGISTRATION_NUMBER_TYPE: EnumField<
      WithholdingTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      TaxRegistrationTypeIn,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      WithholdingTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TDS_ASSESSINGOFFICER: OrderableEdmTypeField<
      WithholdingTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHARED: EnumField<
      WithholdingTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TDS_WARD_NUMBER: OrderableEdmTypeField<
      WithholdingTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TDS_CIRCLE_NUMBER: OrderableEdmTypeField<
      WithholdingTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TCS_WARD_NUMBER: OrderableEdmTypeField<
      WithholdingTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAN_REGISTRATION_NUMBER: OrderableEdmTypeField<
      WithholdingTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TCS_CIRCLE_NUMBER: OrderableEdmTypeField<
      WithholdingTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TCS_ASSESSINGOFFICER: OrderableEdmTypeField<
      WithholdingTaxRegistrationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<WithholdingTaxRegistrationNumbers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link registrationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTRATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'RegistrationNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link registrationNumberType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTRATION_NUMBER_TYPE: fieldBuilder.buildEnumField(
          'RegistrationNumberType',
          TaxRegistrationTypeIn,
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
         * Static representation of the {@link tdsAssessingofficer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TDS_ASSESSINGOFFICER: fieldBuilder.buildEdmTypeField(
          'TDSAssessingofficer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shared} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHARED: fieldBuilder.buildEnumField('Shared', NoYes, true),
        /**
         * Static representation of the {@link tdsWardNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TDS_WARD_NUMBER: fieldBuilder.buildEdmTypeField(
          'TDSWardNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tdsCircleNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TDS_CIRCLE_NUMBER: fieldBuilder.buildEdmTypeField(
          'TDSCircleNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tcsWardNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TCS_WARD_NUMBER: fieldBuilder.buildEdmTypeField(
          'TCSWardNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tanRegistrationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAN_REGISTRATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'TANRegistrationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tcsCircleNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TCS_CIRCLE_NUMBER: fieldBuilder.buildEdmTypeField(
          'TCSCircleNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tcsAssessingofficer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TCS_ASSESSINGOFFICER: fieldBuilder.buildEdmTypeField(
          'TCSAssessingofficer',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WithholdingTaxRegistrationNumbers)
      };
    }

    return this._schema;
  }
}
