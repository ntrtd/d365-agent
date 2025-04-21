/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorChangeProposalFieldEnablements } from './VendorChangeProposalFieldEnablements';
import { VendorChangeProposalFieldEnablementsRequestBuilder } from './VendorChangeProposalFieldEnablementsRequestBuilder';
import { VendTableChangeProposalField } from './VendTableChangeProposalField';
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
export class VendorChangeProposalFieldEnablementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      VendorChangeProposalFieldEnablements<DeSerializersT>,
      DeSerializersT
    >
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
  ): VendorChangeProposalFieldEnablementsApi<DeSerializersT> {
    return new VendorChangeProposalFieldEnablementsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendorChangeProposalFieldEnablements;

  requestBuilder(): VendorChangeProposalFieldEnablementsRequestBuilder<DeSerializersT> {
    return new VendorChangeProposalFieldEnablementsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    VendorChangeProposalFieldEnablements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VendorChangeProposalFieldEnablements<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendorChangeProposalFieldEnablements<DeSerializersT>,
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
    typeof VendorChangeProposalFieldEnablements,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendorChangeProposalFieldEnablements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendorChangeProposalFieldEnablements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIELD: EnumField<
      VendorChangeProposalFieldEnablements<DeSerializers>,
      DeSerializersT,
      VendTableChangeProposalField,
      true,
      true
    >;
    IS_ENABLED: EnumField<
      VendorChangeProposalFieldEnablements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<VendorChangeProposalFieldEnablements<DeSerializers>>;
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
         * Static representation of the {@link field} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD: fieldBuilder.buildEnumField(
          'Field',
          VendTableChangeProposalField,
          true
        ),
        /**
         * Static representation of the {@link isEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ENABLED: fieldBuilder.buildEnumField('IsEnabled', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendorChangeProposalFieldEnablements)
      };
    }

    return this._schema;
  }
}
