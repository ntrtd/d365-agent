/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PositionHierarchies } from './PositionHierarchies';
import { PositionHierarchiesRequestBuilder } from './PositionHierarchiesRequestBuilder';
import { PayIntV1PayrollPositionsApi } from './PayIntV1PayrollPositionsApi';
import { PayrollPositionsApi } from './PayrollPositionsApi';
import { PositionsV2Api } from './PositionsV2Api';
import { PositionHierarchyTypesApi } from './PositionHierarchyTypesApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PositionHierarchiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PositionHierarchies<DeSerializersT>, DeSerializersT>
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
  ): PositionHierarchiesApi<DeSerializersT> {
    return new PositionHierarchiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link payIntV1PayrollPosition} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_V_1_PAYROLL_POSITION: OneToManyLink<
      PositionHierarchies<DeSerializersT>,
      DeSerializersT,
      PayIntV1PayrollPositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollPosition} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_POSITION: OneToManyLink<
      PositionHierarchies<DeSerializersT>,
      DeSerializersT,
      PayrollPositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link position} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION: OneToOneLink<
      PositionHierarchies<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link parentPosition} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_POSITION: OneToOneLink<
      PositionHierarchies<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionHierarchyType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_HIERARCHY_TYPE: OneToOneLink<
      PositionHierarchies<DeSerializersT>,
      DeSerializersT,
      PositionHierarchyTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PayIntV1PayrollPositionsApi<DeSerializersT>,
      PayrollPositionsApi<DeSerializersT>,
      PositionsV2Api<DeSerializersT>,
      PositionsV2Api<DeSerializersT>,
      PositionHierarchyTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PAY_INT_V_1_PAYROLL_POSITION: new OneToManyLink(
        'PayIntV1PayrollPosition',
        this,
        linkedApis[0]
      ),
      PAYROLL_POSITION: new OneToManyLink(
        'PayrollPosition',
        this,
        linkedApis[1]
      ),
      POSITION: new OneToOneLink('Position', this, linkedApis[2]),
      PARENT_POSITION: new OneToOneLink('ParentPosition', this, linkedApis[3]),
      POSITION_HIERARCHY_TYPE: new OneToOneLink(
        'PositionHierarchyType',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = PositionHierarchies;

  requestBuilder(): PositionHierarchiesRequestBuilder<DeSerializersT> {
    return new PositionHierarchiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PositionHierarchies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PositionHierarchies<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PositionHierarchies<DeSerializersT>,
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
    typeof PositionHierarchies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PositionHierarchies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    POSITION_ID: OrderableEdmTypeField<
      PositionHierarchies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HIERARCHY_TYPE_NAME: OrderableEdmTypeField<
      PositionHierarchies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      PositionHierarchies<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      PositionHierarchies<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PARENT_POSITION_ID: OrderableEdmTypeField<
      PositionHierarchies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntV1PayrollPosition} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_V_1_PAYROLL_POSITION: OneToManyLink<
      PositionHierarchies<DeSerializersT>,
      DeSerializersT,
      PayIntV1PayrollPositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollPosition} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_POSITION: OneToManyLink<
      PositionHierarchies<DeSerializersT>,
      DeSerializersT,
      PayrollPositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link position} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION: OneToOneLink<
      PositionHierarchies<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link parentPosition} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_POSITION: OneToOneLink<
      PositionHierarchies<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionHierarchyType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_HIERARCHY_TYPE: OneToOneLink<
      PositionHierarchies<DeSerializersT>,
      DeSerializersT,
      PositionHierarchyTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PositionHierarchies<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link hierarchyTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIERARCHY_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'HierarchyTypeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link parentPositionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_POSITION_ID: fieldBuilder.buildEdmTypeField(
          'ParentPositionId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PositionHierarchies)
      };
    }

    return this._schema;
  }
}
