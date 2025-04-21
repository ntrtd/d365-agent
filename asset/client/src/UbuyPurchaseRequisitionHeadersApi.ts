/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UbuyPurchaseRequisitionHeaders } from './UbuyPurchaseRequisitionHeaders';
import { UbuyPurchaseRequisitionHeadersRequestBuilder } from './UbuyPurchaseRequisitionHeadersRequestBuilder';
import { UbuyPurchaseRequisitionLinesApi } from './UbuyPurchaseRequisitionLinesApi';
import { PurchReqRequisitionStatus } from './PurchReqRequisitionStatus';
import { UbuyOrderProgressStatus } from './UbuyOrderProgressStatus';
import { NoYes } from './NoYes';
import { RequisitionPurpose } from './RequisitionPurpose';
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
export class UbuyPurchaseRequisitionHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<UbuyPurchaseRequisitionHeaders<DeSerializersT>, DeSerializersT>
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
  ): UbuyPurchaseRequisitionHeadersApi<DeSerializersT> {
    return new UbuyPurchaseRequisitionHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link ubuyPurchaseRequisitionLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UBUY_PURCHASE_REQUISITION_LINES: OneToManyLink<
      UbuyPurchaseRequisitionHeaders<DeSerializersT>,
      DeSerializersT,
      UbuyPurchaseRequisitionLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [UbuyPurchaseRequisitionLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      UBUY_PURCHASE_REQUISITION_LINES: new OneToManyLink(
        'UbuyPurchaseRequisitionLines',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = UbuyPurchaseRequisitionHeaders;

  requestBuilder(): UbuyPurchaseRequisitionHeadersRequestBuilder<DeSerializersT> {
    return new UbuyPurchaseRequisitionHeadersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    UbuyPurchaseRequisitionHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      UbuyPurchaseRequisitionHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    UbuyPurchaseRequisitionHeaders<DeSerializersT>,
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
    typeof UbuyPurchaseRequisitionHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        UbuyPurchaseRequisitionHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    REQUISITION_NUMBER: OrderableEdmTypeField<
      UbuyPurchaseRequisitionHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUISITION_STATUS: EnumField<
      UbuyPurchaseRequisitionHeaders<DeSerializers>,
      DeSerializersT,
      PurchReqRequisitionStatus,
      true,
      true
    >;
    DEFAULT_ACCOUNTING_DATE: OrderableEdmTypeField<
      UbuyPurchaseRequisitionHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEFAULT_BUSINESS_JUSTIFICATION_DETAILS: OrderableEdmTypeField<
      UbuyPurchaseRequisitionHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_PROJECT_ID: OrderableEdmTypeField<
      UbuyPurchaseRequisitionHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_REQUESTED_DATE: OrderableEdmTypeField<
      UbuyPurchaseRequisitionHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJECT_BUYING_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      UbuyPurchaseRequisitionHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREPARER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      UbuyPurchaseRequisitionHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_BUSINESS_JUSTIFICATION_CODE: OrderableEdmTypeField<
      UbuyPurchaseRequisitionHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UBUY_ORDER_PROGRESS_STATUS: EnumField<
      UbuyPurchaseRequisitionHeaders<DeSerializers>,
      DeSerializersT,
      UbuyOrderProgressStatus,
      true,
      true
    >;
    REQUISITION_NAME: OrderableEdmTypeField<
      UbuyPurchaseRequisitionHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ON_HOLD_EXPLANATION: OrderableEdmTypeField<
      UbuyPurchaseRequisitionHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PURCHASE_REQUISITION_ON_HOLD: EnumField<
      UbuyPurchaseRequisitionHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REQUISITION_PURPOSE: EnumField<
      UbuyPurchaseRequisitionHeaders<DeSerializers>,
      DeSerializersT,
      RequisitionPurpose,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ubuyPurchaseRequisitionLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UBUY_PURCHASE_REQUISITION_LINES: OneToManyLink<
      UbuyPurchaseRequisitionHeaders<DeSerializersT>,
      DeSerializersT,
      UbuyPurchaseRequisitionLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<UbuyPurchaseRequisitionHeaders<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link requisitionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUISITION_NUMBER: fieldBuilder.buildEdmTypeField(
          'RequisitionNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link requisitionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUISITION_STATUS: fieldBuilder.buildEnumField(
          'RequisitionStatus',
          PurchReqRequisitionStatus,
          true
        ),
        /**
         * Static representation of the {@link defaultAccountingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_ACCOUNTING_DATE: fieldBuilder.buildEdmTypeField(
          'DefaultAccountingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link defaultBusinessJustificationDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_BUSINESS_JUSTIFICATION_DETAILS: fieldBuilder.buildEdmTypeField(
          'DefaultBusinessJustificationDetails',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultProjectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'DefaultProjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultRequestedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_REQUESTED_DATE: fieldBuilder.buildEdmTypeField(
          'DefaultRequestedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link projectBuyingLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_BUYING_LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'ProjectBuyingLegalEntityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link preparerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREPARER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PreparerPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultBusinessJustificationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_BUSINESS_JUSTIFICATION_CODE: fieldBuilder.buildEdmTypeField(
          'DefaultBusinessJustificationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ubuyOrderProgressStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UBUY_ORDER_PROGRESS_STATUS: fieldBuilder.buildEnumField(
          'UbuyOrderProgressStatus',
          UbuyOrderProgressStatus,
          true
        ),
        /**
         * Static representation of the {@link requisitionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUISITION_NAME: fieldBuilder.buildEdmTypeField(
          'RequisitionName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link onHoldExplanation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_HOLD_EXPLANATION: fieldBuilder.buildEdmTypeField(
          'OnHoldExplanation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPurchaseRequisitionOnHold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PURCHASE_REQUISITION_ON_HOLD: fieldBuilder.buildEnumField(
          'IsPurchaseRequisitionOnHold',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link requisitionPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUISITION_PURPOSE: fieldBuilder.buildEnumField(
          'RequisitionPurpose',
          RequisitionPurpose,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', UbuyPurchaseRequisitionHeaders)
      };
    }

    return this._schema;
  }
}
