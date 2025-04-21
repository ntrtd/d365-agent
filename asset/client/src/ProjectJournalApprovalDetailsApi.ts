/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectJournalApprovalDetails } from './ProjectJournalApprovalDetails';
import { ProjectJournalApprovalDetailsRequestBuilder } from './ProjectJournalApprovalDetailsRequestBuilder';
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
export class ProjectJournalApprovalDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProjectJournalApprovalDetails<DeSerializersT>, DeSerializersT>
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
  ): ProjectJournalApprovalDetailsApi<DeSerializersT> {
    return new ProjectJournalApprovalDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjectJournalApprovalDetails;

  requestBuilder(): ProjectJournalApprovalDetailsRequestBuilder<DeSerializersT> {
    return new ProjectJournalApprovalDetailsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProjectJournalApprovalDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjectJournalApprovalDetails<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjectJournalApprovalDetails<DeSerializersT>,
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
    typeof ProjectJournalApprovalDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectJournalApprovalDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectJournalApprovalDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    APPROVE: OrderableEdmTypeField<
      ProjectJournalApprovalDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS_VALUE: OrderableEdmTypeField<
      ProjectJournalApprovalDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NEXT: OrderableEdmTypeField<
      ProjectJournalApprovalDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECK_JOURNAL: EnumField<
      ProjectJournalApprovalDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EDITING: EnumField<
      ProjectJournalApprovalDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GROUP: OrderableEdmTypeField<
      ProjectJournalApprovalDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    READY_FOR_POSTING: EnumField<
      ProjectJournalApprovalDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProjectJournalApprovalDetails<DeSerializers>>;
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
         * Static representation of the {@link approve} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVE: fieldBuilder.buildEdmTypeField('Approve', 'Edm.String', false),
        /**
         * Static representation of the {@link statusValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS_VALUE: fieldBuilder.buildEdmTypeField(
          'StatusValue',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link next} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT: fieldBuilder.buildEdmTypeField('Next', 'Edm.String', true),
        /**
         * Static representation of the {@link checkJournal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_JOURNAL: fieldBuilder.buildEnumField('CheckJournal', NoYes, true),
        /**
         * Static representation of the {@link editing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EDITING: fieldBuilder.buildEnumField('Editing', NoYes, true),
        /**
         * Static representation of the {@link group} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP: fieldBuilder.buildEdmTypeField('Group', 'Edm.String', true),
        /**
         * Static representation of the {@link readyForPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        READY_FOR_POSTING: fieldBuilder.buildEnumField(
          'ReadyForPosting',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectJournalApprovalDetails)
      };
    }

    return this._schema;
  }
}
