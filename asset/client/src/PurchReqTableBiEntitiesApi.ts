/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchReqTableBiEntities } from './PurchReqTableBiEntities';
import { PurchReqTableBiEntitiesRequestBuilder } from './PurchReqTableBiEntitiesRequestBuilder';
import { PurchReqType } from './PurchReqType';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class PurchReqTableBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PurchReqTableBiEntities<DeSerializersT>, DeSerializersT>
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
  ): PurchReqTableBiEntitiesApi<DeSerializersT> {
    return new PurchReqTableBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PurchReqTableBiEntities;

  requestBuilder(): PurchReqTableBiEntitiesRequestBuilder<DeSerializersT> {
    return new PurchReqTableBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PurchReqTableBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PurchReqTableBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchReqTableBiEntities<DeSerializersT>,
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
    typeof PurchReqTableBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchReqTableBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PURCH_REQ_ID: OrderableEdmTypeField<
      PurchReqTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      PurchReqTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCH_REQ_NAME: OrderableEdmTypeField<
      PurchReqTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBMITTED_BY: OrderableEdmTypeField<
      PurchReqTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      PurchReqTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINATOR: OrderableEdmTypeField<
      PurchReqTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      PurchReqTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      PurchReqTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PURCH_REQ_TYPE: EnumField<
      PurchReqTableBiEntities<DeSerializers>,
      DeSerializersT,
      PurchReqType,
      true,
      true
    >;
    REQUIRED_DATE: OrderableEdmTypeField<
      PurchReqTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SOURCE_DOCUMENT_HEADER: OrderableEdmTypeField<
      PurchReqTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      PurchReqTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REQUISITION_STATUS: EnumField<
      PurchReqTableBiEntities<DeSerializers>,
      DeSerializersT,
      PurchReqRequisitionStatus,
      true,
      true
    >;
    SUBMITTED_DATE_TIME: OrderableEdmTypeField<
      PurchReqTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BUSINESS_JUSTIFICATION: OrderableEdmTypeField<
      PurchReqTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      PurchReqTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IS_WORKFLOW_TO_BE_RESUBMITTED: EnumField<
      PurchReqTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      PurchReqTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REQUISITION_PURPOSE: EnumField<
      PurchReqTableBiEntities<DeSerializers>,
      DeSerializersT,
      RequisitionPurpose,
      true,
      true
    >;
    IS_MODIFIED: EnumField<
      PurchReqTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      PurchReqTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ON_HOLD: EnumField<
      PurchReqTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HOLD_EXPLANATION: OrderableEdmTypeField<
      PurchReqTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_ID_DATA_AREA: OrderableEdmTypeField<
      PurchReqTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_INFO_DEFAULT: OrderableEdmTypeField<
      PurchReqTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<PurchReqTableBiEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link purchReqId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_REQ_ID: fieldBuilder.buildEdmTypeField(
          'PurchReqId',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link purchReqName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_REQ_NAME: fieldBuilder.buildEdmTypeField(
          'PurchReqName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link submittedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBMITTED_BY: fieldBuilder.buildEdmTypeField(
          'SubmittedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
        /**
         * Static representation of the {@link originator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINATOR: fieldBuilder.buildEdmTypeField(
          'Originator',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sysCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'SysCreatedBy',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link purchReqType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCH_REQ_TYPE: fieldBuilder.buildEnumField(
          'PurchReqType',
          PurchReqType,
          true
        ),
        /**
         * Static representation of the {@link requiredDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRED_DATE: fieldBuilder.buildEdmTypeField(
          'RequiredDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sourceDocumentHeader} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_DOCUMENT_HEADER: fieldBuilder.buildEdmTypeField(
          'SourceDocumentHeader',
          'Edm.Int64',
          false
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
         * Static representation of the {@link requisitionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUISITION_STATUS: fieldBuilder.buildEnumField(
          'RequisitionStatus',
          PurchReqRequisitionStatus,
          true
        ),
        /**
         * Static representation of the {@link submittedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBMITTED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SubmittedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link businessJustification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_JUSTIFICATION: fieldBuilder.buildEdmTypeField(
          'BusinessJustification',
          'Edm.Int64',
          false
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
         * Static representation of the {@link isWorkflowToBeResubmitted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WORKFLOW_TO_BE_RESUBMITTED: fieldBuilder.buildEnumField(
          'IsWorkflowToBeResubmitted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'CreatedOn',
          'Edm.DateTimeOffset',
          false
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
        /**
         * Static representation of the {@link isModified} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MODIFIED: fieldBuilder.buildEnumField('IsModified', NoYes, true),
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
         * Static representation of the {@link onHold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_HOLD: fieldBuilder.buildEnumField('OnHold', NoYes, true),
        /**
         * Static representation of the {@link holdExplanation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOLD_EXPLANATION: fieldBuilder.buildEdmTypeField(
          'HoldExplanation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projIdDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'ProjIdDataArea',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyInfoDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_INFO_DEFAULT: fieldBuilder.buildEdmTypeField(
          'CompanyInfoDefault',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PurchReqTableBiEntities)
      };
    }

    return this._schema;
  }
}
