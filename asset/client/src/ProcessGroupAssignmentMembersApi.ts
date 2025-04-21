/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProcessGroupAssignmentMembers } from './ProcessGroupAssignmentMembers';
import { ProcessGroupAssignmentMembersRequestBuilder } from './ProcessGroupAssignmentMembersRequestBuilder';
import { ProcessGroupAssignmentsApi } from './ProcessGroupAssignmentsApi';
import { PositionsV2Api } from './PositionsV2Api';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ProcessGroupAssignmentMembersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProcessGroupAssignmentMembers<DeSerializersT>, DeSerializersT>
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
  ): ProcessGroupAssignmentMembersApi<DeSerializersT> {
    return new ProcessGroupAssignmentMembersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link groupAssignment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GROUP_ASSIGNMENT: OneToOneLink<
      ProcessGroupAssignmentMembers<DeSerializersT>,
      DeSerializersT,
      ProcessGroupAssignmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link position} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION: OneToOneLink<
      ProcessGroupAssignmentMembers<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProcessGroupAssignmentsApi<DeSerializersT>,
      PositionsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      GROUP_ASSIGNMENT: new OneToOneLink(
        'Group_Assignment',
        this,
        linkedApis[0]
      ),
      POSITION: new OneToOneLink('Position', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = ProcessGroupAssignmentMembers;

  requestBuilder(): ProcessGroupAssignmentMembersRequestBuilder<DeSerializersT> {
    return new ProcessGroupAssignmentMembersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProcessGroupAssignmentMembers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProcessGroupAssignmentMembers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProcessGroupAssignmentMembers<DeSerializersT>,
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
    typeof ProcessGroupAssignmentMembers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProcessGroupAssignmentMembers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    GROUP_NAME: OrderableEdmTypeField<
      ProcessGroupAssignmentMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSITION_ID: OrderableEdmTypeField<
      ProcessGroupAssignmentMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TITLE: OrderableEdmTypeField<
      ProcessGroupAssignmentMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_NAME: OrderableEdmTypeField<
      ProcessGroupAssignmentMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link groupAssignment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GROUP_ASSIGNMENT: OneToOneLink<
      ProcessGroupAssignmentMembers<DeSerializersT>,
      DeSerializersT,
      ProcessGroupAssignmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link position} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION: OneToOneLink<
      ProcessGroupAssignmentMembers<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProcessGroupAssignmentMembers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link groupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'GroupName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link positionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_ID: fieldBuilder.buildEdmTypeField(
          'PositionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link title} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE: fieldBuilder.buildEdmTypeField('Title', 'Edm.String', true),
        /**
         * Static representation of the {@link workerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_NAME: fieldBuilder.buildEdmTypeField(
          'WorkerName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProcessGroupAssignmentMembers)
      };
    }

    return this._schema;
  }
}
