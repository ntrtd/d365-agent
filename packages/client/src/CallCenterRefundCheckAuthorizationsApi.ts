/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CallCenterRefundCheckAuthorizations } from './CallCenterRefundCheckAuthorizations';
import { CallCenterRefundCheckAuthorizationsRequestBuilder } from './CallCenterRefundCheckAuthorizationsRequestBuilder';
import { McrrcAuthStatus } from './McrrcAuthStatus';
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
export class CallCenterRefundCheckAuthorizationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      CallCenterRefundCheckAuthorizations<DeSerializersT>,
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
  ): CallCenterRefundCheckAuthorizationsApi<DeSerializersT> {
    return new CallCenterRefundCheckAuthorizationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CallCenterRefundCheckAuthorizations;

  requestBuilder(): CallCenterRefundCheckAuthorizationsRequestBuilder<DeSerializersT> {
    return new CallCenterRefundCheckAuthorizationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CallCenterRefundCheckAuthorizations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CallCenterRefundCheckAuthorizations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CallCenterRefundCheckAuthorizations<DeSerializersT>,
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
    typeof CallCenterRefundCheckAuthorizations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CallCenterRefundCheckAuthorizations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CallCenterRefundCheckAuthorizations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ID: OrderableEdmTypeField<
      CallCenterRefundCheckAuthorizations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      CallCenterRefundCheckAuthorizations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AUTHORIZED_DATE_TIME: OrderableEdmTypeField<
      CallCenterRefundCheckAuthorizations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REFUND_CHECK_SETTLEMENT_LINE_NUMBER: OrderableEdmTypeField<
      CallCenterRefundCheckAuthorizations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AUTHORIZATION_STATUS: EnumField<
      CallCenterRefundCheckAuthorizations<DeSerializers>,
      DeSerializersT,
      McrrcAuthStatus,
      true,
      true
    >;
    AUTHORIZED_AMOUNT: OrderableEdmTypeField<
      CallCenterRefundCheckAuthorizations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUSTOMER_PAYMENT_LINE_NUMBER: OrderableEdmTypeField<
      CallCenterRefundCheckAuthorizations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AUTHORIZED_BY: OrderableEdmTypeField<
      CallCenterRefundCheckAuthorizations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CallCenterRefundCheckAuthorizations<DeSerializers>>;
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
         * Static representation of the {@link salesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ID: fieldBuilder.buildEdmTypeField(
          'SalesId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link authorizedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORIZED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'AuthorizedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link refundCheckSettlementLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFUND_CHECK_SETTLEMENT_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'RefundCheckSettlementLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link authorizationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORIZATION_STATUS: fieldBuilder.buildEnumField(
          'AuthorizationStatus',
          McrrcAuthStatus,
          true
        ),
        /**
         * Static representation of the {@link authorizedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORIZED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AuthorizedAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link customerPaymentLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_PAYMENT_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomerPaymentLineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link authorizedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORIZED_BY: fieldBuilder.buildEdmTypeField(
          'AuthorizedBy',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CallCenterRefundCheckAuthorizations)
      };
    }

    return this._schema;
  }
}
