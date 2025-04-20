/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustInterestsCds } from './CustInterestsCds';
import { CustInterestsCdsRequestBuilder } from './CustInterestsCdsRequestBuilder';
import { CustInterestType } from './CustInterestType';
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
export class CustInterestsCdsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustInterestsCds<DeSerializersT>, DeSerializersT>
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
  ): CustInterestsCdsApi<DeSerializersT> {
    return new CustInterestsCdsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustInterestsCds;

  requestBuilder(): CustInterestsCdsRequestBuilder<DeSerializersT> {
    return new CustInterestsCdsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustInterestsCds<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CustInterestsCds<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CustInterestsCds<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CustInterestsCds, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustInterestsCds,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustInterestsCds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTEREST_CODE: OrderableEdmTypeField<
      CustInterestsCds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTEREST_TYPE: EnumField<
      CustInterestsCds<DeSerializers>,
      DeSerializersT,
      CustInterestType,
      true,
      true
    >;
    TXT: OrderableEdmTypeField<
      CustInterestsCds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CustInterestsCds<DeSerializers>>;
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
         * Static representation of the {@link interestCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST_CODE: fieldBuilder.buildEdmTypeField(
          'InterestCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link interestType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTEREST_TYPE: fieldBuilder.buildEnumField(
          'InterestType',
          CustInterestType,
          true
        ),
        /**
         * Static representation of the {@link txt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TXT: fieldBuilder.buildEdmTypeField('Txt', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustInterestsCds)
      };
    }

    return this._schema;
  }
}
