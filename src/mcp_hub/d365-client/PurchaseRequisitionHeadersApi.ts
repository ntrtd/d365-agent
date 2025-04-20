/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchaseRequisitionHeaders } from './PurchaseRequisitionHeaders';
import { PurchaseRequisitionHeadersRequestBuilder } from './PurchaseRequisitionHeadersRequestBuilder';
import { PurchaseRequisitionLinesV2Api } from './PurchaseRequisitionLinesV2Api';
import { PurchaseRequisitionLinesApi } from './PurchaseRequisitionLinesApi';
import { PurchReqRequisitionStatus } from './PurchReqRequisitionStatus';
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
export class PurchaseRequisitionHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PurchaseRequisitionHeaders<DeSerializersT>, DeSerializersT>
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
  ): PurchaseRequisitionHeadersApi<DeSerializersT> {
    return new PurchaseRequisitionHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link purchaseRequisitionLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_REQUISITION_LINES_V_2: OneToManyLink<
      PurchaseRequisitionHeaders<DeSerializersT>,
      DeSerializersT,
      PurchaseRequisitionLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseRequisitionLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_REQUISITION_LINES: OneToManyLink<
      PurchaseRequisitionHeaders<DeSerializersT>,
      DeSerializersT,
      PurchaseRequisitionLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PurchaseRequisitionLinesV2Api<DeSerializersT>,
      PurchaseRequisitionLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PURCHASE_REQUISITION_LINES_V_2: new OneToManyLink(
        'PurchaseRequisitionLinesV2',
        this,
        linkedApis[0]
      ),
      PURCHASE_REQUISITION_LINES: new OneToManyLink(
        'PurchaseRequisitionLines',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = PurchaseRequisitionHeaders;

  requestBuilder(): PurchaseRequisitionHeadersRequestBuilder<DeSerializersT> {
    return new PurchaseRequisitionHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PurchaseRequisitionHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PurchaseRequisitionHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchaseRequisitionHeaders<DeSerializersT>,
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
    typeof PurchaseRequisitionHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchaseRequisitionHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    REQUISITION_NUMBER: OrderableEdmTypeField<
      PurchaseRequisitionHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUISITION_STATUS: EnumField<
      PurchaseRequisitionHeaders<DeSerializers>,
      DeSerializersT,
      PurchReqRequisitionStatus,
      true,
      true
    >;
    DEFAULT_ACCOUNTING_DATE: OrderableEdmTypeField<
      PurchaseRequisitionHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEFAULT_BUSINESS_JUSTIFICATION_DETAILS: OrderableEdmTypeField<
      PurchaseRequisitionHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_PROJECT_ID: OrderableEdmTypeField<
      PurchaseRequisitionHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_REQUESTED_DATE: OrderableEdmTypeField<
      PurchaseRequisitionHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJECT_BUYING_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      PurchaseRequisitionHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREPARER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      PurchaseRequisitionHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_BUSINESS_JUSTIFICATION_CODE: OrderableEdmTypeField<
      PurchaseRequisitionHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUISITION_NAME: OrderableEdmTypeField<
      PurchaseRequisitionHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ON_HOLD_EXPLANATION: OrderableEdmTypeField<
      PurchaseRequisitionHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PURCHASE_REQUISITION_ON_HOLD: EnumField<
      PurchaseRequisitionHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REQUISITION_PURPOSE: EnumField<
      PurchaseRequisitionHeaders<DeSerializers>,
      DeSerializersT,
      RequisitionPurpose,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseRequisitionLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_REQUISITION_LINES_V_2: OneToManyLink<
      PurchaseRequisitionHeaders<DeSerializersT>,
      DeSerializersT,
      PurchaseRequisitionLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link purchaseRequisitionLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_REQUISITION_LINES: OneToManyLink<
      PurchaseRequisitionHeaders<DeSerializersT>,
      DeSerializersT,
      PurchaseRequisitionLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PurchaseRequisitionHeaders<DeSerializers>>;
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
        ALL_FIELDS: new AllFields('*', PurchaseRequisitionHeaders)
      };
    }

    return this._schema;
  }
}
