/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EfDocAuthorityStates } from './EfDocAuthorityStates';
import { EfDocAuthorityStatesRequestBuilder } from './EfDocAuthorityStatesRequestBuilder';
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
export class EfDocAuthorityStatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EfDocAuthorityStates<DeSerializersT>, DeSerializersT>
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
  ): EfDocAuthorityStatesApi<DeSerializersT> {
    return new EfDocAuthorityStatesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EfDocAuthorityStates;

  requestBuilder(): EfDocAuthorityStatesRequestBuilder<DeSerializersT> {
    return new EfDocAuthorityStatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EfDocAuthorityStates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EfDocAuthorityStates<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EfDocAuthorityStates<DeSerializersT>,
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
    typeof EfDocAuthorityStates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EfDocAuthorityStates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    AUTHORITY: OrderableEdmTypeField<
      EfDocAuthorityStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATE: OrderableEdmTypeField<
      EfDocAuthorityStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADD_EXEMPT: EnumField<
      EfDocAuthorityStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALIDATE_BENEFIT_CODES: EnumField<
      EfDocAuthorityStates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<EfDocAuthorityStates<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link authority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORITY: fieldBuilder.buildEdmTypeField(
          'Authority',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', false),
        /**
         * Static representation of the {@link addExempt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADD_EXEMPT: fieldBuilder.buildEnumField('AddExempt', NoYes, true),
        /**
         * Static representation of the {@link validateBenefitCodes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_BENEFIT_CODES: fieldBuilder.buildEnumField(
          'ValidateBenefitCodes',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EfDocAuthorityStates)
      };
    }

    return this._schema;
  }
}
