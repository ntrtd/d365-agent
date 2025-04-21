/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SeparateDivisions } from './SeparateDivisions';
import { SeparateDivisionsRequestBuilder } from './SeparateDivisionsRequestBuilder';
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
export class SeparateDivisionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SeparateDivisions<DeSerializersT>, DeSerializersT>
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
  ): SeparateDivisionsApi<DeSerializersT> {
    return new SeparateDivisionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SeparateDivisions;

  requestBuilder(): SeparateDivisionsRequestBuilder<DeSerializersT> {
    return new SeparateDivisionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SeparateDivisions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SeparateDivisions<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SeparateDivisions<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof SeparateDivisions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SeparateDivisions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SeparateDivisions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SEPARATE_DIVISION_ID: OrderableEdmTypeField<
      SeparateDivisions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR_ACCOUNT: OrderableEdmTypeField<
      SeparateDivisions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INDEPENDENT: EnumField<
      SeparateDivisions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALCOHOL_REGULATION_AUTHORITY: OrderableEdmTypeField<
      SeparateDivisions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SeparateDivisions<DeSerializers>>;
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
         * Static representation of the {@link separateDivisionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEPARATE_DIVISION_ID: fieldBuilder.buildEdmTypeField(
          'SeparateDivisionID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link vendorAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendorAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link independent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDEPENDENT: fieldBuilder.buildEnumField('Independent', NoYes, true),
        /**
         * Static representation of the {@link alcoholRegulationAuthority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALCOHOL_REGULATION_AUTHORITY: fieldBuilder.buildEdmTypeField(
          'AlcoholRegulationAuthority',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SeparateDivisions)
      };
    }

    return this._schema;
  }
}
