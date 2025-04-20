/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BlwiParameters } from './BlwiParameters';
import { BlwiParametersRequestBuilder } from './BlwiParametersRequestBuilder';
import { NoYes } from './NoYes';
import { MonthQuarter } from './MonthQuarter';
import { TradeBlwiPurposeCodeCheck } from './TradeBlwiPurposeCodeCheck';
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
export class BlwiParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BlwiParameters<DeSerializersT>, DeSerializersT>
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
  ): BlwiParametersApi<DeSerializersT> {
    return new BlwiParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BlwiParameters;

  requestBuilder(): BlwiParametersRequestBuilder<DeSerializersT> {
    return new BlwiParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BlwiParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BlwiParameters<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BlwiParameters<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BlwiParameters, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(BlwiParameters, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BlwiParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ID: OrderableEdmTypeField<
      BlwiParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CENTRAL_BANK_PURPOSE_CODE: OrderableEdmTypeField<
      BlwiParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSFORM_RESPONSE: EnumField<
      BlwiParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DECLARATION_PERIOD: EnumField<
      BlwiParameters<DeSerializers>,
      DeSerializersT,
      MonthQuarter,
      true,
      true
    >;
    NBB_MAIL: OrderableEdmTypeField<
      BlwiParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      BlwiParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECK_BLWI_CODE_ON_JOURNALS: EnumField<
      BlwiParameters<DeSerializers>,
      DeSerializersT,
      TradeBlwiPurposeCodeCheck,
      true,
      true
    >;
    FAX: OrderableEdmTypeField<
      BlwiParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      BlwiParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BLWI: EnumField<
      BlwiParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PHONE: OrderableEdmTypeField<
      BlwiParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<BlwiParameters<DeSerializers>>;
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
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.Int32', false),
        /**
         * Static representation of the {@link centralBankPurposeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CENTRAL_BANK_PURPOSE_CODE: fieldBuilder.buildEdmTypeField(
          'CentralBankPurposeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transformResponse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFORM_RESPONSE: fieldBuilder.buildEnumField(
          'TransformResponse',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link declarationPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECLARATION_PERIOD: fieldBuilder.buildEnumField(
          'DeclarationPeriod',
          MonthQuarter,
          true
        ),
        /**
         * Static representation of the {@link nbbMail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NBB_MAIL: fieldBuilder.buildEdmTypeField('NBBMail', 'Edm.String', true),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link checkBlwiCodeOnJournals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_BLWI_CODE_ON_JOURNALS: fieldBuilder.buildEnumField(
          'CheckBLWICodeOnJournals',
          TradeBlwiPurposeCodeCheck,
          true
        ),
        /**
         * Static representation of the {@link fax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAX: fieldBuilder.buildEdmTypeField('Fax', 'Edm.String', true),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link blwi} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLWI: fieldBuilder.buildEnumField('BLWI', NoYes, true),
        /**
         * Static representation of the {@link phone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE: fieldBuilder.buildEdmTypeField('Phone', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BlwiParameters)
      };
    }

    return this._schema;
  }
}
