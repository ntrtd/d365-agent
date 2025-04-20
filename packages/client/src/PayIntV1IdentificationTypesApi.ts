/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayIntV1IdentificationTypes } from './PayIntV1IdentificationTypes';
import { PayIntV1IdentificationTypesRequestBuilder } from './PayIntV1IdentificationTypesRequestBuilder';
import { NoYes } from './NoYes';
import { HcmIdentificationNumberAllowedValues } from './HcmIdentificationNumberAllowedValues';
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
export class PayIntV1IdentificationTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PayIntV1IdentificationTypes<DeSerializersT>, DeSerializersT>
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
  ): PayIntV1IdentificationTypesApi<DeSerializersT> {
    return new PayIntV1IdentificationTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PayIntV1IdentificationTypes;

  requestBuilder(): PayIntV1IdentificationTypesRequestBuilder<DeSerializersT> {
    return new PayIntV1IdentificationTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayIntV1IdentificationTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PayIntV1IdentificationTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayIntV1IdentificationTypes<DeSerializersT>,
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
    typeof PayIntV1IdentificationTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayIntV1IdentificationTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    IDENTIFICATION_TYPE_ID: OrderableEdmTypeField<
      PayIntV1IdentificationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIXED_LENGTH: OrderableEdmTypeField<
      PayIntV1IdentificationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IDENTIFICATION_NUMBER_FORMAT: OrderableEdmTypeField<
      PayIntV1IdentificationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECK_DUPLICATES: EnumField<
      PayIntV1IdentificationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PayIntV1IdentificationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOWED_VALUES: EnumField<
      PayIntV1IdentificationTypes<DeSerializers>,
      DeSerializersT,
      HcmIdentificationNumberAllowedValues,
      true,
      true
    >;
    ALL_FIELDS: AllFields<PayIntV1IdentificationTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link identificationTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFICATION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'IdentificationTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fixedLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_LENGTH: fieldBuilder.buildEdmTypeField(
          'FixedLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link identificationNumberFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFICATION_NUMBER_FORMAT: fieldBuilder.buildEdmTypeField(
          'IdentificationNumberFormat',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link checkDuplicates} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_DUPLICATES: fieldBuilder.buildEnumField(
          'CheckDuplicates',
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
         * Static representation of the {@link allowedValues} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWED_VALUES: fieldBuilder.buildEnumField(
          'AllowedValues',
          HcmIdentificationNumberAllowedValues,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayIntV1IdentificationTypes)
      };
    }

    return this._schema;
  }
}
