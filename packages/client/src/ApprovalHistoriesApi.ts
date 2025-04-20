/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApprovalHistories } from './ApprovalHistories';
import { ApprovalHistoriesRequestBuilder } from './ApprovalHistoriesRequestBuilder';
import { WorkflowTrackingType } from './WorkflowTrackingType';
import { WorkflowTrackingContext } from './WorkflowTrackingContext';
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
export class ApprovalHistoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ApprovalHistories<DeSerializersT>, DeSerializersT>
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
  ): ApprovalHistoriesApi<DeSerializersT> {
    return new ApprovalHistoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ApprovalHistories;

  requestBuilder(): ApprovalHistoriesRequestBuilder<DeSerializersT> {
    return new ApprovalHistoriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ApprovalHistories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ApprovalHistories<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ApprovalHistories<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ApprovalHistories,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ApprovalHistories,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TRACKING_REC_ID: OrderableEdmTypeField<
      ApprovalHistories<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRACKING_TYPE: EnumField<
      ApprovalHistories<DeSerializers>,
      DeSerializersT,
      WorkflowTrackingType,
      true,
      true
    >;
    WORK_ITEM_REC_ID: OrderableEdmTypeField<
      ApprovalHistories<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRACKING_CONTEXT: EnumField<
      ApprovalHistories<DeSerializers>,
      DeSerializersT,
      WorkflowTrackingContext,
      true,
      true
    >;
    ACTION_USER: OrderableEdmTypeField<
      ApprovalHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVAL_USER: OrderableEdmTypeField<
      ApprovalHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTION_USER_OBJECT_ID: OrderableEdmTypeField<
      ApprovalHistories<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    ACTION_TIME: OrderableEdmTypeField<
      ApprovalHistories<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRACKING_MESSAGE: OrderableEdmTypeField<
      ApprovalHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ApprovalHistories<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link trackingRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACKING_REC_ID: fieldBuilder.buildEdmTypeField(
          'TrackingRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link trackingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACKING_TYPE: fieldBuilder.buildEnumField(
          'TrackingType',
          WorkflowTrackingType,
          true
        ),
        /**
         * Static representation of the {@link workItemRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ITEM_REC_ID: fieldBuilder.buildEdmTypeField(
          'WorkItemRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link trackingContext} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACKING_CONTEXT: fieldBuilder.buildEnumField(
          'TrackingContext',
          WorkflowTrackingContext,
          true
        ),
        /**
         * Static representation of the {@link actionUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION_USER: fieldBuilder.buildEdmTypeField(
          'ActionUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link approvalUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVAL_USER: fieldBuilder.buildEdmTypeField(
          'ApprovalUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link actionUserObjectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION_USER_OBJECT_ID: fieldBuilder.buildEdmTypeField(
          'ActionUserObjectId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link actionTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION_TIME: fieldBuilder.buildEdmTypeField(
          'ActionTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link trackingMessage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACKING_MESSAGE: fieldBuilder.buildEdmTypeField(
          'TrackingMessage',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ApprovalHistories)
      };
    }

    return this._schema;
  }
}
