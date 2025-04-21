/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RegisterFiscalTrans_W } from './RegisterFiscalTrans_W';
import { RegisterFiscalTrans_WRequestBuilder } from './RegisterFiscalTrans_WRequestBuilder';
import { RegisterFiscalTransCode_WApi } from './RegisterFiscalTransCode_WApi';
import { NoYes } from './NoYes';
import { CashRegisterFiscalTransStatusW } from './CashRegisterFiscalTransStatusW';
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
  EnumField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class RegisterFiscalTrans_WApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RegisterFiscalTrans_W<DeSerializersT>, DeSerializersT>
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
  ): RegisterFiscalTrans_WApi<DeSerializersT> {
    return new RegisterFiscalTrans_WApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link registerFiscalTransCodeW} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGISTER_FISCAL_TRANS_CODE_W: OneToManyLink<
      RegisterFiscalTrans_W<DeSerializersT>,
      DeSerializersT,
      RegisterFiscalTransCode_WApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RegisterFiscalTransCode_WApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      REGISTER_FISCAL_TRANS_CODE_W: new OneToManyLink(
        'RegisterFiscalTransCode_W',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RegisterFiscalTrans_W;

  requestBuilder(): RegisterFiscalTrans_WRequestBuilder<DeSerializersT> {
    return new RegisterFiscalTrans_WRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RegisterFiscalTrans_W<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RegisterFiscalTrans_W<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RegisterFiscalTrans_W<DeSerializersT>,
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
    typeof RegisterFiscalTrans_W,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RegisterFiscalTrans_W,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RegisterFiscalTrans_W<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      RegisterFiscalTrans_W<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      RegisterFiscalTrans_W<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_OFFLINE: EnumField<
      RegisterFiscalTrans_W<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STATUS: EnumField<
      RegisterFiscalTrans_W<DeSerializers>,
      DeSerializersT,
      CashRegisterFiscalTransStatusW,
      true,
      true
    >;
    TRANS_ID: OrderableEdmTypeField<
      RegisterFiscalTrans_W<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TRANS_DATE_TIME: OrderableEdmTypeField<
      RegisterFiscalTrans_W<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link registerFiscalTransCodeW} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGISTER_FISCAL_TRANS_CODE_W: OneToManyLink<
      RegisterFiscalTrans_W<DeSerializersT>,
      DeSerializersT,
      RegisterFiscalTransCode_WApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RegisterFiscalTrans_W<DeSerializers>>;
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
         * Static representation of the {@link transDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'TransDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isOffline} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OFFLINE: fieldBuilder.buildEnumField('IsOffline', NoYes, true),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          CashRegisterFiscalTransStatusW,
          true
        ),
        /**
         * Static representation of the {@link transId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_ID: fieldBuilder.buildEdmTypeField('TransId', 'Edm.Int32', false),
        /**
         * Static representation of the {@link transDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'TransDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RegisterFiscalTrans_W)
      };
    }

    return this._schema;
  }
}
