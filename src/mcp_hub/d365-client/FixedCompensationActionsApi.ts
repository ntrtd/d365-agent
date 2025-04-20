/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FixedCompensationActions } from './FixedCompensationActions';
import { FixedCompensationActionsRequestBuilder } from './FixedCompensationActionsRequestBuilder';
import { PersonnelActionTypesApi } from './PersonnelActionTypesApi';
import { NoYes } from './NoYes';
import { HrmCompFixedActionType } from './HrmCompFixedActionType';
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
export class FixedCompensationActionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FixedCompensationActions<DeSerializersT>, DeSerializersT>
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
  ): FixedCompensationActionsApi<DeSerializersT> {
    return new FixedCompensationActionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link personnelActionType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSONNEL_ACTION_TYPE: OneToManyLink<
      FixedCompensationActions<DeSerializersT>,
      DeSerializersT,
      PersonnelActionTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PersonnelActionTypesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PERSONNEL_ACTION_TYPE: new OneToManyLink(
        'PersonnelActionType',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = FixedCompensationActions;

  requestBuilder(): FixedCompensationActionsRequestBuilder<DeSerializersT> {
    return new FixedCompensationActionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FixedCompensationActions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FixedCompensationActions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FixedCompensationActions<DeSerializersT>,
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
    typeof FixedCompensationActions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FixedCompensationActions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FixedCompensationActions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACTION: OrderableEdmTypeField<
      FixedCompensationActions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACTIVE: EnumField<
      FixedCompensationActions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      FixedCompensationActions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      FixedCompensationActions<DeSerializers>,
      DeSerializersT,
      HrmCompFixedActionType,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link personnelActionType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSONNEL_ACTION_TYPE: OneToManyLink<
      FixedCompensationActions<DeSerializersT>,
      DeSerializersT,
      PersonnelActionTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FixedCompensationActions<DeSerializers>>;
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
         * Static representation of the {@link action} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION: fieldBuilder.buildEdmTypeField('Action', 'Edm.String', false),
        /**
         * Static representation of the {@link active} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE: fieldBuilder.buildEnumField('Active', NoYes, true),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', HrmCompFixedActionType, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FixedCompensationActions)
      };
    }

    return this._schema;
  }
}
