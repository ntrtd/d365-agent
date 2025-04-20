/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReleasedProductReadinessCheckAppliedActions } from './ReleasedProductReadinessCheckAppliedActions';
import { ReleasedProductReadinessCheckAppliedActionsRequestBuilder } from './ReleasedProductReadinessCheckAppliedActionsRequestBuilder';
import { EngChgReadinessActions } from './EngChgReadinessActions';
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
export class ReleasedProductReadinessCheckAppliedActionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ReleasedProductReadinessCheckAppliedActions<DeSerializersT>,
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
  ): ReleasedProductReadinessCheckAppliedActionsApi<DeSerializersT> {
    return new ReleasedProductReadinessCheckAppliedActionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ReleasedProductReadinessCheckAppliedActions;

  requestBuilder(): ReleasedProductReadinessCheckAppliedActionsRequestBuilder<DeSerializersT> {
    return new ReleasedProductReadinessCheckAppliedActionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ReleasedProductReadinessCheckAppliedActions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ReleasedProductReadinessCheckAppliedActions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ReleasedProductReadinessCheckAppliedActions<DeSerializersT>,
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
    typeof ReleasedProductReadinessCheckAppliedActions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ReleasedProductReadinessCheckAppliedActions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ReleasedProductReadinessCheckAppliedActions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RELEASED_PRODUCT_READINESS_CHECK_APPLIED_ACTION_RECORD_ID: OrderableEdmTypeField<
      ReleasedProductReadinessCheckAppliedActions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    APPLIED_ACTION: EnumField<
      ReleasedProductReadinessCheckAppliedActions<DeSerializers>,
      DeSerializersT,
      EngChgReadinessActions,
      true,
      true
    >;
    ACTION_LOG: OrderableEdmTypeField<
      ReleasedProductReadinessCheckAppliedActions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELEASED_PRODUCT_READINESS_CHECK_RECORD_ID: OrderableEdmTypeField<
      ReleasedProductReadinessCheckAppliedActions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      ReleasedProductReadinessCheckAppliedActions<DeSerializers>
    >;
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
         * Static representation of the {@link releasedProductReadinessCheckAppliedActionRecordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASED_PRODUCT_READINESS_CHECK_APPLIED_ACTION_RECORD_ID:
          fieldBuilder.buildEdmTypeField(
            'ReleasedProductReadinessCheckAppliedActionRecordId',
            'Edm.Int64',
            false
          ),
        /**
         * Static representation of the {@link appliedAction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLIED_ACTION: fieldBuilder.buildEnumField(
          'AppliedAction',
          EngChgReadinessActions,
          true
        ),
        /**
         * Static representation of the {@link actionLog} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION_LOG: fieldBuilder.buildEdmTypeField(
          'ActionLog',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link releasedProductReadinessCheckRecordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASED_PRODUCT_READINESS_CHECK_RECORD_ID:
          fieldBuilder.buildEdmTypeField(
            'ReleasedProductReadinessCheckRecordId',
            'Edm.Int64',
            false
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          ReleasedProductReadinessCheckAppliedActions
        )
      };
    }

    return this._schema;
  }
}
