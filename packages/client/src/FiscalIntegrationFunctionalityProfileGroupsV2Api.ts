/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalIntegrationFunctionalityProfileGroupsV2 } from './FiscalIntegrationFunctionalityProfileGroupsV2';
import { FiscalIntegrationFunctionalityProfileGroupsV2RequestBuilder } from './FiscalIntegrationFunctionalityProfileGroupsV2RequestBuilder';
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
export class FiscalIntegrationFunctionalityProfileGroupsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      FiscalIntegrationFunctionalityProfileGroupsV2<DeSerializersT>,
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
  ): FiscalIntegrationFunctionalityProfileGroupsV2Api<DeSerializersT> {
    return new FiscalIntegrationFunctionalityProfileGroupsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FiscalIntegrationFunctionalityProfileGroupsV2;

  requestBuilder(): FiscalIntegrationFunctionalityProfileGroupsV2RequestBuilder<DeSerializersT> {
    return new FiscalIntegrationFunctionalityProfileGroupsV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FiscalIntegrationFunctionalityProfileGroupsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FiscalIntegrationFunctionalityProfileGroupsV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FiscalIntegrationFunctionalityProfileGroupsV2<DeSerializersT>,
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
    typeof FiscalIntegrationFunctionalityProfileGroupsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FiscalIntegrationFunctionalityProfileGroupsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    GROUP_NUMBER: OrderableEdmTypeField<
      FiscalIntegrationFunctionalityProfileGroupsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROFILE_NUMBER: OrderableEdmTypeField<
      FiscalIntegrationFunctionalityProfileGroupsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      FiscalIntegrationFunctionalityProfileGroupsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FUNCTIONAL_PROFILE_DESCRIPTION: OrderableEdmTypeField<
      FiscalIntegrationFunctionalityProfileGroupsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      FiscalIntegrationFunctionalityProfileGroupsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVE_FROM: OrderableEdmTypeField<
      FiscalIntegrationFunctionalityProfileGroupsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POSTPONE: OrderableEdmTypeField<
      FiscalIntegrationFunctionalityProfileGroupsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DISABLE: EnumField<
      FiscalIntegrationFunctionalityProfileGroupsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MARK_AS_REGISTERED: OrderableEdmTypeField<
      FiscalIntegrationFunctionalityProfileGroupsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SKIP: OrderableEdmTypeField<
      FiscalIntegrationFunctionalityProfileGroupsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      FiscalIntegrationFunctionalityProfileGroupsV2<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link groupNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_NUMBER: fieldBuilder.buildEdmTypeField(
          'GroupNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link profileNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFILE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProfileNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', false),
        /**
         * Static representation of the {@link functionalProfileDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTIONAL_PROFILE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'FunctionalProfileDescription',
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
        /**
         * Static representation of the {@link activeFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE_FROM: fieldBuilder.buildEdmTypeField(
          'ActiveFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link postpone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTPONE: fieldBuilder.buildEdmTypeField(
          'Postpone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDisable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DISABLE: fieldBuilder.buildEnumField('IsDisable', NoYes, true),
        /**
         * Static representation of the {@link markAsRegistered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARK_AS_REGISTERED: fieldBuilder.buildEdmTypeField(
          'MarkAsRegistered',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link skip} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP: fieldBuilder.buildEdmTypeField('Skip', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          FiscalIntegrationFunctionalityProfileGroupsV2
        )
      };
    }

    return this._schema;
  }
}
