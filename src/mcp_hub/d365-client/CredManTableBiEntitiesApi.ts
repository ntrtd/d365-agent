/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CredManTableBiEntities } from './CredManTableBiEntities';
import { CredManTableBiEntitiesRequestBuilder } from './CredManTableBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { CredManTableWorkflowStatus } from './CredManTableWorkflowStatus';
import { CredManDocumentStatusCheck } from './CredManDocumentStatusCheck';
import { CredManHoldType } from './CredManHoldType';
import { CredManReason } from './CredManReason';
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
export class CredManTableBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CredManTableBiEntities<DeSerializersT>, DeSerializersT>
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
  ): CredManTableBiEntitiesApi<DeSerializersT> {
    return new CredManTableBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CredManTableBiEntities;

  requestBuilder(): CredManTableBiEntitiesRequestBuilder<DeSerializersT> {
    return new CredManTableBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CredManTableBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CredManTableBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CredManTableBiEntities<DeSerializersT>,
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
    typeof CredManTableBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CredManTableBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CRED_MAN_ID: OrderableEdmTypeField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REJECTED: EnumField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WHS_LOAD_ID_DATA_AREA: OrderableEdmTypeField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      CredManTableWorkflowStatus,
      true,
      true
    >;
    SALES_DEAD_LINE: OrderableEdmTypeField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REVIEW_DATE: OrderableEdmTypeField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_ID: OrderableEdmTypeField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVE: EnumField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DOCUMENT_STATUS: EnumField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      CredManDocumentStatusCheck,
      true,
      true
    >;
    DELIVERY_DATE: OrderableEdmTypeField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_CREATED_DATE_TIME: OrderableEdmTypeField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    HOLD_TYPE: EnumField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      CredManHoldType,
      true,
      true
    >;
    FREIGHT_ZONE: OrderableEdmTypeField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BLOCKED_REASON: OrderableEdmTypeField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PAYMENT_TERM: OrderableEdmTypeField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELEASED_BY: OrderableEdmTypeField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WORKER_SALES_TAKER: OrderableEdmTypeField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    AMOUNT_CHANGED: EnumField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RELEASED_DATE_TIME: OrderableEdmTypeField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WHS_LOAD_ID: OrderableEdmTypeField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELEASE_REASON_ID: OrderableEdmTypeField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_SALES_RESPONSIBLE: OrderableEdmTypeField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CUST_ACCOUNT: OrderableEdmTypeField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TOTAL: OrderableEdmTypeField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CRED_MAN_REASON: EnumField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      CredManReason,
      true,
      true
    >;
    NOTES: OrderableEdmTypeField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TABLE_REF_ID: OrderableEdmTypeField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CRED_MAN_GROUP_ID: OrderableEdmTypeField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PARM_ID: OrderableEdmTypeField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROFORMA: EnumField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_POOL_ID: OrderableEdmTypeField<
      CredManTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CredManTableBiEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link credManId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRED_MAN_ID: fieldBuilder.buildEdmTypeField(
          'CredManId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', false),
        /**
         * Static representation of the {@link rejected} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REJECTED: fieldBuilder.buildEnumField('Rejected', NoYes, true),
        /**
         * Static representation of the {@link sysModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'SysModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link whsLoadIdDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WHS_LOAD_ID_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'WHSLoadIdDataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          CredManTableWorkflowStatus,
          true
        ),
        /**
         * Static representation of the {@link salesDeadLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_DEAD_LINE: fieldBuilder.buildEdmTypeField(
          'SalesDeadLine',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link reviewDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVIEW_DATE: fieldBuilder.buildEdmTypeField(
          'ReviewDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link salesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ID: fieldBuilder.buildEdmTypeField('SalesId', 'Edm.String', true),
        /**
         * Static representation of the {@link active} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE: fieldBuilder.buildEnumField('Active', NoYes, true),
        /**
         * Static representation of the {@link documentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_STATUS: fieldBuilder.buildEnumField(
          'DocumentStatus',
          CredManDocumentStatusCheck,
          true
        ),
        /**
         * Static representation of the {@link deliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'DeliveryDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link salesCreatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SalesCreatedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link holdType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOLD_TYPE: fieldBuilder.buildEnumField(
          'HoldType',
          CredManHoldType,
          true
        ),
        /**
         * Static representation of the {@link freightZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREIGHT_ZONE: fieldBuilder.buildEdmTypeField(
          'FreightZone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link blockedReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCKED_REASON: fieldBuilder.buildEdmTypeField(
          'BlockedReason',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link paymentTerm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TERM: fieldBuilder.buildEdmTypeField(
          'PaymentTerm',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link releasedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASED_BY: fieldBuilder.buildEdmTypeField(
          'ReleasedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link workerSalesTaker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_SALES_TAKER: fieldBuilder.buildEdmTypeField(
          'WorkerSalesTaker',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link amountChanged} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_CHANGED: fieldBuilder.buildEnumField(
          'AmountChanged',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link releasedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ReleasedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link whsLoadId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WHS_LOAD_ID: fieldBuilder.buildEdmTypeField(
          'WHSLoadId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link releaseReasonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASE_REASON_ID: fieldBuilder.buildEdmTypeField(
          'ReleaseReasonId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workerSalesResponsible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_SALES_RESPONSIBLE: fieldBuilder.buildEdmTypeField(
          'WorkerSalesResponsible',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link custAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TOTAL: fieldBuilder.buildEdmTypeField(
          'SalesTotal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link credManReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRED_MAN_REASON: fieldBuilder.buildEnumField(
          'CredManReason',
          CredManReason,
          true
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link tableRefId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TABLE_REF_ID: fieldBuilder.buildEdmTypeField(
          'TableRefId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link credManGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRED_MAN_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CredManGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesParmId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PARM_ID: fieldBuilder.buildEdmTypeField(
          'SalesParmId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link proforma} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFORMA: fieldBuilder.buildEnumField('Proforma', NoYes, true),
        /**
         * Static representation of the {@link salesPoolId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_POOL_ID: fieldBuilder.buildEdmTypeField(
          'SalesPoolId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CredManTableBiEntities)
      };
    }

    return this._schema;
  }
}
