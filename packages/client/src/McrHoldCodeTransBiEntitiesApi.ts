/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { McrHoldCodeTransBiEntities } from './McrHoldCodeTransBiEntities';
import { McrHoldCodeTransBiEntitiesRequestBuilder } from './McrHoldCodeTransBiEntitiesRequestBuilder';
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
export class McrHoldCodeTransBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<McrHoldCodeTransBiEntities<DeSerializersT>, DeSerializersT>
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
  ): McrHoldCodeTransBiEntitiesApi<DeSerializersT> {
    return new McrHoldCodeTransBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = McrHoldCodeTransBiEntities;

  requestBuilder(): McrHoldCodeTransBiEntitiesRequestBuilder<DeSerializersT> {
    return new McrHoldCodeTransBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    McrHoldCodeTransBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      McrHoldCodeTransBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    McrHoldCodeTransBiEntities<DeSerializersT>,
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
    typeof McrHoldCodeTransBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        McrHoldCodeTransBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      McrHoldCodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      McrHoldCodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      McrHoldCodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MCR_REASON_CODE: OrderableEdmTypeField<
      McrHoldCodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MCR_USER: OrderableEdmTypeField<
      McrHoldCodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      McrHoldCodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MCR_HOLD_USER: OrderableEdmTypeField<
      McrHoldCodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      McrHoldCodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_REF_ID: OrderableEdmTypeField<
      McrHoldCodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MCR_HOLD_CODE_COMMENT: OrderableEdmTypeField<
      McrHoldCodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MCR_CHECKED_OUT_DATE_TIME: OrderableEdmTypeField<
      McrHoldCodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      McrHoldCodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MCR_HOLD_CODE: OrderableEdmTypeField<
      McrHoldCodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MCR_HOLD_CLEAR_DATE_TIME: OrderableEdmTypeField<
      McrHoldCodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MCR_COMMENT: OrderableEdmTypeField<
      McrHoldCodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASOH_FOLLOWING_HOLD: OrderableEdmTypeField<
      McrHoldCodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MCR_CHECKED_OUT_TO: OrderableEdmTypeField<
      McrHoldCodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      McrHoldCodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SYS_MODIFIED_TRANSACTION_ID: OrderableEdmTypeField<
      McrHoldCodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_TRANSACTION_ID: OrderableEdmTypeField<
      McrHoldCodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MCR_CLEARED: EnumField<
      McrHoldCodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MCR_CLEARED_USER: OrderableEdmTypeField<
      McrHoldCodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      McrHoldCodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MCR_HOLD_DATE_TIME: OrderableEdmTypeField<
      McrHoldCodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RETAIL_INFOCODE_ID: OrderableEdmTypeField<
      McrHoldCodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MCR_CHECKED_OUT: EnumField<
      McrHoldCodeTransBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<McrHoldCodeTransBiEntities<DeSerializers>>;
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
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
         * Static representation of the {@link mcrReasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_REASON_CODE: fieldBuilder.buildEdmTypeField(
          'MCRReasonCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mcrUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_USER: fieldBuilder.buildEdmTypeField('MCRUser', 'Edm.String', true),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mcrHoldUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_HOLD_USER: fieldBuilder.buildEdmTypeField(
          'MCRHoldUser',
          'Edm.String',
          true
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
         * Static representation of the {@link inventRefId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_REF_ID: fieldBuilder.buildEdmTypeField(
          'InventRefId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mcrHoldCodeComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_HOLD_CODE_COMMENT: fieldBuilder.buildEdmTypeField(
          'MCRHoldCodeComment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mcrCheckedOutDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_CHECKED_OUT_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'MCRCheckedOutDateTime',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link mcrHoldCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_HOLD_CODE: fieldBuilder.buildEdmTypeField(
          'MCRHoldCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mcrHoldClearDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_HOLD_CLEAR_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'MCRHoldClearDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link mcrComment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_COMMENT: fieldBuilder.buildEdmTypeField(
          'MCRComment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link asohFollowingHold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASOH_FOLLOWING_HOLD: fieldBuilder.buildEdmTypeField(
          'ASOHFollowingHold',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mcrCheckedOutTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_CHECKED_OUT_TO: fieldBuilder.buildEdmTypeField(
          'MCRCheckedOutTo',
          'Edm.String',
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
         * Static representation of the {@link sysModifiedTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'SysModifiedTransactionId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sysTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'SysTransactionId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link mcrCleared} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_CLEARED: fieldBuilder.buildEnumField('MCRCleared', NoYes, true),
        /**
         * Static representation of the {@link mcrClearedUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_CLEARED_USER: fieldBuilder.buildEdmTypeField(
          'MCRClearedUser',
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
         * Static representation of the {@link mcrHoldDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_HOLD_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'MCRHoldDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link retailInfocodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_INFOCODE_ID: fieldBuilder.buildEdmTypeField(
          'RetailInfocodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mcrCheckedOut} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_CHECKED_OUT: fieldBuilder.buildEnumField(
          'MCRCheckedOut',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', McrHoldCodeTransBiEntities)
      };
    }

    return this._schema;
  }
}
