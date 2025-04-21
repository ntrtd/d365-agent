/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PersonnelActionTypes } from './PersonnelActionTypes';
import { PersonnelActionTypesRequestBuilder } from './PersonnelActionTypesRequestBuilder';
import { FixedCompensationActionsApi } from './FixedCompensationActionsApi';
import { HcmActionType } from './HcmActionType';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PersonnelActionTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PersonnelActionTypes<DeSerializersT>, DeSerializersT>
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
  ): PersonnelActionTypesApi<DeSerializersT> {
    return new PersonnelActionTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link relatedFixedCompensationAction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_FIXED_COMPENSATION_ACTION: OneToOneLink<
      PersonnelActionTypes<DeSerializersT>,
      DeSerializersT,
      FixedCompensationActionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [FixedCompensationActionsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RELATED_FIXED_COMPENSATION_ACTION: new OneToOneLink(
        'RelatedFixedCompensationAction',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = PersonnelActionTypes;

  requestBuilder(): PersonnelActionTypesRequestBuilder<DeSerializersT> {
    return new PersonnelActionTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PersonnelActionTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PersonnelActionTypes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PersonnelActionTypes<DeSerializersT>,
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
    typeof PersonnelActionTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PersonnelActionTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_ACTION_TYPE: OrderableEdmTypeField<
      PersonnelActionTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WORKFLOW: OrderableEdmTypeField<
      PersonnelActionTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSONNEL_ACTION: EnumField<
      PersonnelActionTypes<DeSerializers>,
      DeSerializersT,
      HcmActionType,
      true,
      true
    >;
    LEGAL_ENTITY: OrderableEdmTypeField<
      PersonnelActionTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_COMPENSATION_ACTION: OrderableEdmTypeField<
      PersonnelActionTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PersonnelActionTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link relatedFixedCompensationAction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_FIXED_COMPENSATION_ACTION: OneToOneLink<
      PersonnelActionTypes<DeSerializersT>,
      DeSerializersT,
      FixedCompensationActionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PersonnelActionTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link personnelActionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_ACTION_TYPE: fieldBuilder.buildEdmTypeField(
          'PersonnelActionType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link workflow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW: fieldBuilder.buildEdmTypeField(
          'Workflow',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personnelAction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_ACTION: fieldBuilder.buildEnumField(
          'PersonnelAction',
          HcmActionType,
          true
        ),
        /**
         * Static representation of the {@link legalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'LegalEntity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fixedCompensationAction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_COMPENSATION_ACTION: fieldBuilder.buildEdmTypeField(
          'FixedCompensationAction',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PersonnelActionTypes)
      };
    }

    return this._schema;
  }
}
