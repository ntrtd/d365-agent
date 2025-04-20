/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SignLimitParameters } from './SignLimitParameters';
import { SignLimitParametersRequestBuilder } from './SignLimitParametersRequestBuilder';
import { NoYes } from './NoYes';
import { HrpAuthorityBasis } from './HrpAuthorityBasis';
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
export class SignLimitParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SignLimitParameters<DeSerializersT>, DeSerializersT>
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
  ): SignLimitParametersApi<DeSerializersT> {
    return new SignLimitParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SignLimitParameters;

  requestBuilder(): SignLimitParametersRequestBuilder<DeSerializersT> {
    return new SignLimitParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SignLimitParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SignLimitParameters<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SignLimitParameters<DeSerializersT>,
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
    typeof SignLimitParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SignLimitParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    KEY: OrderableEdmTypeField<
      SignLimitParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SIGNING_LIMITS_FOR_EMPLOYEES_ONLY: EnumField<
      SignLimitParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LIMIT_BASIS: EnumField<
      SignLimitParameters<DeSerializers>,
      DeSerializersT,
      HrpAuthorityBasis,
      true,
      true
    >;
    REQUIRE_EXPLICIT_SIGNING_LIMIT_REQUEST: EnumField<
      SignLimitParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<SignLimitParameters<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link key} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY: fieldBuilder.buildEdmTypeField('Key', 'Edm.Int32', false),
        /**
         * Static representation of the {@link signingLimitsForEmployeesOnly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGNING_LIMITS_FOR_EMPLOYEES_ONLY: fieldBuilder.buildEnumField(
          'SigningLimitsForEmployeesOnly',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link limitBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIMIT_BASIS: fieldBuilder.buildEnumField(
          'LimitBasis',
          HrpAuthorityBasis,
          true
        ),
        /**
         * Static representation of the {@link requireExplicitSigningLimitRequest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRE_EXPLICIT_SIGNING_LIMIT_REQUEST: fieldBuilder.buildEnumField(
          'RequireExplicitSigningLimitRequest',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SignLimitParameters)
      };
    }

    return this._schema;
  }
}
