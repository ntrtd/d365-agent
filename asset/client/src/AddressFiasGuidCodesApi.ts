/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressFiasGuidCodes } from './AddressFiasGuidCodes';
import { AddressFiasGuidCodesRequestBuilder } from './AddressFiasGuidCodesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class AddressFiasGuidCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AddressFiasGuidCodes<DeSerializersT>, DeSerializersT>
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
  ): AddressFiasGuidCodesApi<DeSerializersT> {
    return new AddressFiasGuidCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AddressFiasGuidCodes;

  requestBuilder(): AddressFiasGuidCodesRequestBuilder<DeSerializersT> {
    return new AddressFiasGuidCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AddressFiasGuidCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AddressFiasGuidCodes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AddressFiasGuidCodes<DeSerializersT>,
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
    typeof AddressFiasGuidCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AddressFiasGuidCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AddressFiasGuidCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIAS_GUID_ID: OrderableEdmTypeField<
      AddressFiasGuidCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIAS_PARENT_GUID_ID: OrderableEdmTypeField<
      AddressFiasGuidCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REF_TABLE_ID: OrderableEdmTypeField<
      AddressFiasGuidCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<AddressFiasGuidCodes<DeSerializers>>;
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
         * Static representation of the {@link fiasGuidId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIAS_GUID_ID: fieldBuilder.buildEdmTypeField(
          'FiasGuidId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fiasParentGuidId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIAS_PARENT_GUID_ID: fieldBuilder.buildEdmTypeField(
          'FiasParentGuidId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link refTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'RefTableId',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AddressFiasGuidCodes)
      };
    }

    return this._schema;
  }
}
