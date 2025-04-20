/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalLifoGroups } from './FiscalLifoGroups';
import { FiscalLifoGroupsRequestBuilder } from './FiscalLifoGroupsRequestBuilder';
import { InventFiscalLifoNormalValueCalc } from './InventFiscalLifoNormalValueCalc';
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
export class FiscalLifoGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FiscalLifoGroups<DeSerializersT>, DeSerializersT>
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
  ): FiscalLifoGroupsApi<DeSerializersT> {
    return new FiscalLifoGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FiscalLifoGroups;

  requestBuilder(): FiscalLifoGroupsRequestBuilder<DeSerializersT> {
    return new FiscalLifoGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FiscalLifoGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FiscalLifoGroups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<FiscalLifoGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof FiscalLifoGroups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FiscalLifoGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FiscalLifoGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_ID: OrderableEdmTypeField<
      FiscalLifoGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      FiscalLifoGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NORMAL_VALUE_CALCULATION: EnumField<
      FiscalLifoGroups<DeSerializers>,
      DeSerializersT,
      InventFiscalLifoNormalValueCalc,
      true,
      true
    >;
    NORMAL_VALUE: OrderableEdmTypeField<
      FiscalLifoGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_INDIVIDUAL: EnumField<
      FiscalLifoGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<FiscalLifoGroups<DeSerializers>>;
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
         * Static representation of the {@link groupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_ID: fieldBuilder.buildEdmTypeField(
          'GroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link normalValueCalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NORMAL_VALUE_CALCULATION: fieldBuilder.buildEnumField(
          'NormalValueCalculation',
          InventFiscalLifoNormalValueCalc,
          true
        ),
        /**
         * Static representation of the {@link normalValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NORMAL_VALUE: fieldBuilder.buildEdmTypeField(
          'NormalValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isIndividual} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INDIVIDUAL: fieldBuilder.buildEnumField('IsIndividual', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FiscalLifoGroups)
      };
    }

    return this._schema;
  }
}
