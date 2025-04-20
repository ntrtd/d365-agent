/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PolicyViolationJustifications } from './PolicyViolationJustifications';
import { PolicyViolationJustificationsRequestBuilder } from './PolicyViolationJustificationsRequestBuilder';
import { TrvWorkflowAction } from './TrvWorkflowAction';
import { TrvPolicyViolationJustificationTypeEnum } from './TrvPolicyViolationJustificationTypeEnum';
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
export class PolicyViolationJustificationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PolicyViolationJustifications<DeSerializersT>, DeSerializersT>
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
  ): PolicyViolationJustificationsApi<DeSerializersT> {
    return new PolicyViolationJustificationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PolicyViolationJustifications;

  requestBuilder(): PolicyViolationJustificationsRequestBuilder<DeSerializersT> {
    return new PolicyViolationJustificationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PolicyViolationJustifications<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PolicyViolationJustifications<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PolicyViolationJustifications<DeSerializersT>,
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
    typeof PolicyViolationJustifications,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PolicyViolationJustifications,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JUSTIFICATION_ID: OrderableEdmTypeField<
      PolicyViolationJustifications<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      PolicyViolationJustifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JUSTIFICATION_TEXT: OrderableEdmTypeField<
      PolicyViolationJustifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTION: EnumField<
      PolicyViolationJustifications<DeSerializers>,
      DeSerializersT,
      TrvWorkflowAction,
      true,
      true
    >;
    VIOLATING_RECORD_ID: OrderableEdmTypeField<
      PolicyViolationJustifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VIOLATION_JUSTIFICATION_TYPE: EnumField<
      PolicyViolationJustifications<DeSerializers>,
      DeSerializersT,
      TrvPolicyViolationJustificationTypeEnum,
      true,
      true
    >;
    ALL_FIELDS: AllFields<PolicyViolationJustifications<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link justificationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JUSTIFICATION_ID: fieldBuilder.buildEdmTypeField(
          'JustificationId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link justificationText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JUSTIFICATION_TEXT: fieldBuilder.buildEdmTypeField(
          'JustificationText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link action} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION: fieldBuilder.buildEnumField('Action', TrvWorkflowAction, true),
        /**
         * Static representation of the {@link violatingRecordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VIOLATING_RECORD_ID: fieldBuilder.buildEdmTypeField(
          'ViolatingRecordId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link violationJustificationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VIOLATION_JUSTIFICATION_TYPE: fieldBuilder.buildEnumField(
          'ViolationJustificationType',
          TrvPolicyViolationJustificationTypeEnum,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PolicyViolationJustifications)
      };
    }

    return this._schema;
  }
}
