/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DirParameters } from './DirParameters';
import { DirParametersRequestBuilder } from './DirParametersRequestBuilder';
import { NoYes } from './NoYes';
import { DirPartyBaseType } from './DirPartyBaseType';
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
export class DirParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DirParameters<DeSerializersT>, DeSerializersT>
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
  ): DirParametersApi<DeSerializersT> {
    return new DirParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DirParameters;

  requestBuilder(): DirParametersRequestBuilder<DeSerializersT> {
    return new DirParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DirParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DirParameters<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DirParameters<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof DirParameters, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(DirParameters, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    KEY: OrderableEdmTypeField<
      DirParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME_SEQUENCE: OrderableEdmTypeField<
      DirParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUNS_DISPLAY_ON_ADDRESS: EnumField<
      DirParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_PARTY_TYPE: EnumField<
      DirParameters<DeSerializers>,
      DeSerializersT,
      DirPartyBaseType,
      true,
      true
    >;
    ENABLE_EDIT_FOR_EXTERNALLY_MAINTAINED_FIELDS: EnumField<
      DirParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELETE_PARTIES_WITH_NO_ROLE: EnumField<
      DirParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_DUPLICATE_CHECK: EnumField<
      DirParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DUNS_CHECK_UNIQUE: EnumField<
      DirParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLE_SYSTEM_RELATIONSHIPS: EnumField<
      DirParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ENABLE_EMAIL_ADDRESS_FIELD_VALIDATION: EnumField<
      DirParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<DirParameters<DeSerializers>>;
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
         * Static representation of the {@link nameSequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_SEQUENCE: fieldBuilder.buildEdmTypeField(
          'NameSequence',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dunsDisplayOnAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUNS_DISPLAY_ON_ADDRESS: fieldBuilder.buildEnumField(
          'DunsDisplayOnAddress',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultPartyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PARTY_TYPE: fieldBuilder.buildEnumField(
          'DefaultPartyType',
          DirPartyBaseType,
          true
        ),
        /**
         * Static representation of the {@link enableEditForExternallyMaintainedFields} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_EDIT_FOR_EXTERNALLY_MAINTAINED_FIELDS:
          fieldBuilder.buildEnumField(
            'EnableEditForExternallyMaintainedFields',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link deletePartiesWithNoRole} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELETE_PARTIES_WITH_NO_ROLE: fieldBuilder.buildEnumField(
          'DeletePartiesWithNoRole',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link useDuplicateCheck} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_DUPLICATE_CHECK: fieldBuilder.buildEnumField(
          'UseDuplicateCheck',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link dunsCheckUnique} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUNS_CHECK_UNIQUE: fieldBuilder.buildEnumField(
          'DunsCheckUnique',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link enableSystemRelationships} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_SYSTEM_RELATIONSHIPS: fieldBuilder.buildEnumField(
          'EnableSystemRelationships',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link enableEmailAddressFieldValidation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_EMAIL_ADDRESS_FIELD_VALIDATION: fieldBuilder.buildEnumField(
          'EnableEmailAddressFieldValidation',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DirParameters)
      };
    }

    return this._schema;
  }
}
