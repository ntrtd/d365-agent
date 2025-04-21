/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SegregationOfDutiesConflicts } from './SegregationOfDutiesConflicts';
import { SegregationOfDutiesConflictsRequestBuilder } from './SegregationOfDutiesConflictsRequestBuilder';
import { RoleAssignmentMode } from './RoleAssignmentMode';
import { SegregationOfDutiesResolution } from './SegregationOfDutiesResolution';
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
export class SegregationOfDutiesConflictsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SegregationOfDutiesConflicts<DeSerializersT>, DeSerializersT>
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
  ): SegregationOfDutiesConflictsApi<DeSerializersT> {
    return new SegregationOfDutiesConflictsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SegregationOfDutiesConflicts;

  requestBuilder(): SegregationOfDutiesConflictsRequestBuilder<DeSerializersT> {
    return new SegregationOfDutiesConflictsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SegregationOfDutiesConflicts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SegregationOfDutiesConflicts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SegregationOfDutiesConflicts<DeSerializersT>,
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
    typeof SegregationOfDutiesConflicts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SegregationOfDutiesConflicts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SEGREGATION_OF_DUTIES_RULE_VALID_FROM: OrderableEdmTypeField<
      SegregationOfDutiesConflicts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SEGREGATION_OF_DUTIES_RULE_VALID_TO: OrderableEdmTypeField<
      SegregationOfDutiesConflicts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SEGREGATION_OF_DUTIES_RULE_NAME: OrderableEdmTypeField<
      SegregationOfDutiesConflicts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USER: OrderableEdmTypeField<
      SegregationOfDutiesConflicts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXISTING_ROLE_IDENTIFIER: OrderableEdmTypeField<
      SegregationOfDutiesConflicts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXISTING_DUTY_IDENTIFIER: OrderableEdmTypeField<
      SegregationOfDutiesConflicts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NEW_ROLE_IDENTIFIER: OrderableEdmTypeField<
      SegregationOfDutiesConflicts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NEW_DUTY_IDENTIFIER: OrderableEdmTypeField<
      SegregationOfDutiesConflicts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXISTING_DUTY_NAME: OrderableEdmTypeField<
      SegregationOfDutiesConflicts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEW_DUTY_NAME: OrderableEdmTypeField<
      SegregationOfDutiesConflicts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEW_ROLE_NAME: OrderableEdmTypeField<
      SegregationOfDutiesConflicts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_FOR_OVERRIDE: OrderableEdmTypeField<
      SegregationOfDutiesConflicts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSIGNMENT_MODE: EnumField<
      SegregationOfDutiesConflicts<DeSerializers>,
      DeSerializersT,
      RoleAssignmentMode,
      true,
      true
    >;
    EXISTING_ROLE_NAME: OrderableEdmTypeField<
      SegregationOfDutiesConflicts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESOLUTION: EnumField<
      SegregationOfDutiesConflicts<DeSerializers>,
      DeSerializersT,
      SegregationOfDutiesResolution,
      true,
      true
    >;
    ALL_FIELDS: AllFields<SegregationOfDutiesConflicts<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link segregationOfDutiesRuleValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGREGATION_OF_DUTIES_RULE_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'SegregationOfDutiesRuleValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link segregationOfDutiesRuleValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGREGATION_OF_DUTIES_RULE_VALID_TO: fieldBuilder.buildEdmTypeField(
          'SegregationOfDutiesRuleValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link segregationOfDutiesRuleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGREGATION_OF_DUTIES_RULE_NAME: fieldBuilder.buildEdmTypeField(
          'SegregationOfDutiesRuleName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link user} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER: fieldBuilder.buildEdmTypeField('User', 'Edm.String', false),
        /**
         * Static representation of the {@link existingRoleIdentifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXISTING_ROLE_IDENTIFIER: fieldBuilder.buildEdmTypeField(
          'ExistingRoleIdentifier',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link existingDutyIdentifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXISTING_DUTY_IDENTIFIER: fieldBuilder.buildEdmTypeField(
          'ExistingDutyIdentifier',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link newRoleIdentifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_ROLE_IDENTIFIER: fieldBuilder.buildEdmTypeField(
          'NewRoleIdentifier',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link newDutyIdentifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_DUTY_IDENTIFIER: fieldBuilder.buildEdmTypeField(
          'NewDutyIdentifier',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link existingDutyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXISTING_DUTY_NAME: fieldBuilder.buildEdmTypeField(
          'ExistingDutyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link newDutyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_DUTY_NAME: fieldBuilder.buildEdmTypeField(
          'NewDutyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link newRoleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_ROLE_NAME: fieldBuilder.buildEdmTypeField(
          'NewRoleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reasonForOverride} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_FOR_OVERRIDE: fieldBuilder.buildEdmTypeField(
          'ReasonForOverride',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assignmentMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNMENT_MODE: fieldBuilder.buildEnumField(
          'AssignmentMode',
          RoleAssignmentMode,
          true
        ),
        /**
         * Static representation of the {@link existingRoleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXISTING_ROLE_NAME: fieldBuilder.buildEdmTypeField(
          'ExistingRoleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link resolution} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOLUTION: fieldBuilder.buildEnumField(
          'Resolution',
          SegregationOfDutiesResolution,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SegregationOfDutiesConflicts)
      };
    }

    return this._schema;
  }
}
