/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RegisterFiscalTransCode_W } from './RegisterFiscalTransCode_W';
import { RegisterFiscalTransCode_WRequestBuilder } from './RegisterFiscalTransCode_WRequestBuilder';
import { RegisterFiscalTrans_WApi } from './RegisterFiscalTrans_WApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RegisterFiscalTransCode_WApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RegisterFiscalTransCode_W<DeSerializersT>, DeSerializersT>
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
  ): RegisterFiscalTransCode_WApi<DeSerializersT> {
    return new RegisterFiscalTransCode_WApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link registerFiscalTransW} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGISTER_FISCAL_TRANS_W: OneToOneLink<
      RegisterFiscalTransCode_W<DeSerializersT>,
      DeSerializersT,
      RegisterFiscalTrans_WApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RegisterFiscalTrans_WApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      REGISTER_FISCAL_TRANS_W: new OneToOneLink(
        'RegisterFiscalTrans_W',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RegisterFiscalTransCode_W;

  requestBuilder(): RegisterFiscalTransCode_WRequestBuilder<DeSerializersT> {
    return new RegisterFiscalTransCode_WRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RegisterFiscalTransCode_W<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RegisterFiscalTransCode_W<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RegisterFiscalTransCode_W<DeSerializersT>,
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
    typeof RegisterFiscalTransCode_W,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RegisterFiscalTransCode_W,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RegisterFiscalTransCode_W<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      RegisterFiscalTransCode_W<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LABEL: OrderableEdmTypeField<
      RegisterFiscalTransCode_W<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      RegisterFiscalTransCode_W<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE: OrderableEdmTypeField<
      RegisterFiscalTransCode_W<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link registerFiscalTransW} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGISTER_FISCAL_TRANS_W: OneToOneLink<
      RegisterFiscalTransCode_W<DeSerializersT>,
      DeSerializersT,
      RegisterFiscalTrans_WApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RegisterFiscalTransCode_W<DeSerializers>>;
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
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', false),
        /**
         * Static representation of the {@link label} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL: fieldBuilder.buildEdmTypeField('Label', 'Edm.String', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.String', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RegisterFiscalTransCode_W)
      };
    }

    return this._schema;
  }
}
